const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = [];
const idArray = [];


function mainMenu() {
    function createManager() {
        console.log("Please build your team");
        inquirer.prompt([{
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: async answer => {
                if(answer !== ""){
                    return true;
                }
                return "Please enter a name."
            }},

            {
            type: "input",
            name: "managerId",
            message: "What is your manager Id?",
            validate: async answer => {
                if(answer !==""){
                    return true;
                }
                return "Please enter an id."
            }},
            {
            type: "input",
            name: "managerEmail",
            message: "what is your manager email?",
            validate: async answer => {
                if(answer !==""){
                    return true;
                }
                return "Please enter a email."
            }},
            {
            type: "input",
            name: "managerNumber",
            message: "what is your manager office number?",
            validate: async answer => {
                if(answer !==""){
                    return true;
                }
                return "Please enter a number"
            }},
            
        ]).then(answer => {
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerNumber)
            teamMembers.push(manager);
            idArray.push(answer.managerId);
            nextTeamMember();

        })
    }
    createManager();
}

    function nextTeamMember() {
        inquirer.prompt([{
            type: "list",
            name: "memberChoice",
            message: "Which team member would you like to add?",
            choices: ["Engineer", "Intern", "I don't want anymore team members"]
        }]).then(answer => {
            console.log(answer.memberChoice);
            if (answer.memberChoice === "Engineer") {
                createEngineer();
            }
            if (answer.memberChoice === "Intern") {
                createIntern();
            }
            if (answer.memberChoice === "I don't want anymore team members") {
                console.log("Let's finalize your team.")
                console.log(idArray);
                console.log(teamMembers);
            }
        })

    }

    function createEngineer() {
        console.log("Please fill out Engineer information.");
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?",
                validate: async answer => {
                    if(answer !== ""){
                        return true;
                    }
                    return "Please enter a name."
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "Please enter the engineer's id.",
                validate: async answer => {
                    if (answer !== ""){
                        return true;
                    }
                    return "Please enter a number"
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter your engineers email.",
                validate: async answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an email."
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the engineer's github account",
                validate: async answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter an account name"
                }
            }
        ]).then(answer => {
        const engineer = new Engineer(answer.engineerName, answer.engineerId, answer.engineerEmail, answer.engineerGithub)
        teamMembers.push(engineer);
        idArray.push(answer.engineerId);
        nextTeamMember();
        })
    }

    function createIntern() {
        console.log("Please fill out your interns information");
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?",
                validate: async answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a name"
                }
            },
            {
                type: "input",
                name: "internId",
                message: "what is your interns id?",
                validate: async answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter an Id"
                }
            },
            {
                type: "input",
                name : "internEmail",
                message: "what is your interns email address?",
                validate: async answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter an email address."
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "what school did your intern attend",
                validate: async answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter a school."
                }
            }
        ]).then(answer => {
            const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool)
            teamMembers.push(intern);
            idArray.push(answer.internId);
            nextTeamMember();
        })
    }


mainMenu();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
