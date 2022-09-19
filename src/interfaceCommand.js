import arg from "arg";
import inquirer from "inquirer";
import { frontOrBack } from "./main"

function argumentOptionsParser(rawArguments) {
    let args = arg(
        {
            "--english": Boolean,
            "--spanish": Boolean,
            "--test": Boolean,
            "--e": "--english",
            "--s": "--spanish",
            "--t": "--test"
        },
        {
            argv: rawArguments.slice(2),
        }
    );
    let languaje = "none"
    if (args["--spanish"] || args["--s"]) languaje = "Español"
    if (args["--english"] || args["--e"]) languaje = "English"
    return {
        template: args._[0],
        languaje: languaje,
        runTest: (args["--test"] || args["--t"]) ? true : false,
    };
}

async function inquireUndeclaredItems(opts) {

    const displayOptions = [];
    if (opts.languaje === "none") {
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
    console.clear();
    let opts = argumentOptionsParser(args);
    opts = await inquireUndeclaredItems(opts);
    //console.log(opts);
    await frontOrBack(opts)
}