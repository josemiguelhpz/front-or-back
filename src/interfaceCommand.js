import arg from "arg";
import inquirer from "inquirer";
import { frontOrBack } from "./main"

function argumentOptionsParser(rawArguments) {
    let args = arg(
        {
            "--español": Boolean,
            "--spanish": Boolean,
            "--e": "--español",
            "--s": "--spanish"
        },
        {
            argv: rawArguments.slice(2),
        }
    );
    return {
        template: args._[0],
        languaje: (args["--español"] || args["--spanish"]) ? "Español" : "English"
    };
}

async function inquireUndeclaredItems(opts) {

    const displayOptions = [];
    if (opts.languaje === "English") {
        displayOptions.push({
            type: "list",
            name: "languaje",
            message: "What Languaje would you like to use for instructions?",
            choices: ["English", "Español"],
            default: "English",
        });
    }

    /*if (!opts.git) {
        displayOptions.push({
            type: "confirm",
            name: "git",
            message: "Would you like to use git?",
            default: false,
        });
    }*/

    const userInput = await inquirer.prompt(displayOptions);
    return {
        ...opts,
        languaje: userInput.languaje || opts.languaje,
        //git: opts.git || userInput.git,
    };
}

export async function interfaceCommand(args) {
    let opts = argumentOptionsParser(args);
    opts = await inquireUndeclaredItems(opts);
    //console.log(opts);
    await frontOrBack(opts)
}