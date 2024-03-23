#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Guess a number: "
    },
]);
if (answers.userGuessNumber === randomNumber) {
    console.log("Welldone! you guess a right number.");
}
else {
    console.log("You guess a wrong number.");
}
