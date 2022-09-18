import { t, configureLang } from "./translations"
import { templateGrabber } from './templateGrabber'
import { obtainUserData, startLevel, calculateResult, finishCurrentLevel } from "./userData"
const shell = require("shelljs");
const config = require("./config")

async function parseLevel(lastRecord) {
    //its everything ok?
    const template = config.levels[lastRecord.level].template;
    const result = shell.exec(`npm --prefix ./${template} run test`);
    if (result.code === 1) {
        console.log(t("failTest"))
        return;
    }
    else console.log(t("passTest"))
    //go to next
    try {
        await finishCurrentLevel()
        await putLevel(lastRecord.level + 1)
    } catch (error) {
        console.log(t("finish"));
        await calculateResult()
    }
}

async function putLevel(level) {
    await templateGrabber({
        targetDirectory: config.levels[level].targetDirectory,
        template: config.levels[level].template
    })
    await startLevel(level)
    console.log(t("levelShow"))
}

export async function frontOrBack(opts) {
    configureLang(opts)
    console.log(t("welcome"))
    const userData = await obtainUserData()
    const lastRecord = userData.records[userData.records.length - 1];
    //run current test...
    if (opts.runTest) {
        if (!userData.records) return;
        parseLevel(lastRecord)
    } else {
        //for now we start with the first backend challenge
        if (userData.records.length == 0) {
            await putLevel(1)
        } else parseLevel(lastRecord)
    }
}


