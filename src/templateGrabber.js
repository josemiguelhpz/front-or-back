import chalk from "chalk";
import fs from "fs";
import path from "path";
import ncp from "ncp";
import { promisify } from "util";
import { projectInstall } from "pkg-install";
import Listr from "listr";
import { t } from "./translations"

// access
const access = promisify(fs.access);

// reccusive copy
const copy = promisify(ncp);

// async function to copy template files
async function copyProjectTemplateFiles(opts) {
    try {
        createPathIfDoesntExists(opts.targetDirectory)
        return copy(opts.templateDirectory, opts.targetDirectory, {
            clobber: false,
        });
    } catch (error) {
        createPathIfDoesntExists(opts.targetDirectory)
        return copy(opts.templateDirectoryExcluding, opts.targetDirectory, {
            clobber: false,
        });
    }
}

const createPathIfDoesntExists = (path) => {
    var dir = './' + path;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

export async function templateGrabber(opts) {
    opts = {
        ...opts,
        targetDirectory: opts.targetDirectory || process.cwd(),
    };

    const fullPathName = new URL(import.meta.url).pathname;
    let templateDir = path.join(fullPathName, '../../', 'projectTemplates', opts.template.toLowerCase())
    opts.templateDirectory = templateDir;
    opts.templateDirectoryExcluding = templateDir.substring(3);

    try {
        await access(templateDir, fs.constants.R_OK);
    } catch (err) {
        console.log(chalk.red(`Template directory ${templateDir} does not exist`));
        console.log(err);
        process.exit(1);
    }

    const runningTask = new Listr([
        {
            title: t("copy"),
            task: async () => await copyProjectTemplateFiles(opts),
        },
        {
            title: t("dependency"),
            task: async () =>
                await projectInstall({
                    cwd: opts.targetDirectory,
                })
        },
    ]);

    await runningTask.run();

    console.log(chalk.green(`${t("creation")} ${opts.template}`));
    return true;
}