// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");
const newMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input

// function to check if the user has not put in any information
const checkInput = function(value){
    if(value != ""){
        return true;
    }else {
        return "Please enter some input."
    }
}

const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is your projects title?", 
        // validating the users input to make sure they insert something 
        validate: checkInput
    },
    {
        type: "input", 
        name: "description",
        message: "Describe your project.", 
        validate: checkInput

    },
    {
        type: "input", 
        name: "installation",
        message: "Explain how to install the software",  
        validate: checkInput

    },
    {
        type: "input", 
        name: "usage",
        message: "Describe how you will use the project.", 
        validate: checkInput

    },
    {
        type: "list", 
        name: "license",
        message: "Select a license for the project.", 
        choices: ["MIT", "This licesnse", "That license", "Every license"],
        validate: checkInput

    },
    {
        type: "input", 
        name: "contributing",
        message: "Who contributed to the project?", 
        validate: checkInput

    },
    {
        type: "input", 
        name: "tests",
        message: "Enter testing instructions for the project.", 
        validate: checkInput

    },
    {
        type: "input", 
        name: "questions",
        message: "Enter any FAQ.", 
        validate: checkInput

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err){
        if (err){
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    // creating a prompt for the questions
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        

        writeToFile("./generated/README.md", data); 
    });

};

// Function call to initialize app
init();

