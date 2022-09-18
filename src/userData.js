//this creates a front-or-back.json file if does not exits, tracks user data and calculate results..
import fs from "fs";
import { promisify } from "util";
const fs_writeFile = promisify(fs.writeFile)
const fs_readFile = promisify(fs.readFile)

const fileName = "front-or-back.json"
var userData = {
    table: []
};

async function saveData() {
    var json = JSON.stringify(userData);
    await fs_writeFile(fileName, json);
    return userData;
}

async function loadFile() {
    return await fs_readFile(fileName)
}

const fileExists = () => fs.existsSync(fileName)

export async function obtainUserData() {
    if (fileExists()) {
        return loadFile()
    } else {
        return saveData()
    }
}