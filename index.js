#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence or a paragraph to count words: "
    }
]);
const words = answer.sentence.trim().split(" "); // trim is used to remove white spaces
// split is used to collect all the words in an array
//console.log(words)
console.log(`Your sentence contains ${words.length} words`);
