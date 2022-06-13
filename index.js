// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
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
    },
    {
        type: "input", 
        name: "description",
        message: "Describe your project.", 
    },
    {
        type: "input", 
        name: "installation",
        message: "Explain how to install the software",  
    },
    {
        type: "input", 
        name: "usage",
        message: "Describe how you will use the project.", 
    },
    {
        type: "input", 
        name: "license",
        message: "Select a license for the project.", 
    },
    {
        type: "input", 
        name: "contributing",
        message: "Who contributed to the project?", 
    },
    {
        type: "input", 
        name: "tests",
        message: "Enter testing instructions for the project.", 
    },
    {
        type: "input", 
        name: "questions",
        message: "Enter any FAQ.", 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

