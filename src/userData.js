//this creates a front-or-back.json file if does not exits, tracks user data and calculate results..
import fs from "fs";
import { promisify } from "util";
import { t } from "./translations";
const fs_writeFile = promisify(fs.writeFile)
const fs_readFile = promisify(fs.readFile)

const fileName = "front-or-back.json"
var userData = {
    records: []
};

async function saveData() {
    var json = JSON.stringify(userData);
    await fs_writeFile(fileName, json);
    return userData;
}

async function loadFile() {
    const res = await fs_readFile(fileName);
    userData = JSON.parse(res);
    return userData;
}

const fileExists = () => fs.existsSync(fileName)

export async function obtainUserData() {
    if (fileExists()) {
        console.log(t("already"))
        return loadFile()
    } else {
        return saveData()
    }
}

export async function startLevel(level) {
    userData.records.push({ level: level, startLevelAt: new Date().toJSON() });
    await saveData()
}
export async function finishCurrentLevel() {
    userData.records[userData.records.length - 1].finishLevelAt = new Date().toJSON();
    await saveData()
}
export async function calculateResult() {
    //impares=back, pares = front
    console.log(userData)
}