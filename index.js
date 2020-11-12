// Requirements
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a project description."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation requirements for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "What are the user instructions for your project?"
    },
    {
        type: "list",
        name: "license",
        message: "Select a License.",
        choices: [
            "Apache License 2.0",
            "GNU v3.0 License",
            "MIT License",
            "None"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the contribution guidelines for this reopository?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions."
    }];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log ("README file was successfully created!");
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
            .then(function(data){
                writeToFile("README.md", generateMarkdown(data));
    });
}

// function call to initialize program
init();