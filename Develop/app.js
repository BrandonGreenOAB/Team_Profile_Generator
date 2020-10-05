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
        inquirer.prompt({
            type: "input",
            name: "managerName",
            message: "What is your manager's name?",
            validate: answer => {
                if(answer){
                    return true;
                }
                return "Please enter a name."
            },
            type: "input",
            name: "managerId",
            message: "What is your manager Id?",
            validate: answer => {
                if(answer !==""){
                    return true;
                }
                return "Please enter an id."
            },
            type: "input",
            name: "managerEmail",
            message: "what is your manager email?",
            validate: answer => {
                if(answer !==""){
                    return true;
                }
                return "Please enter a email."
            },
            type: "input",
            name: "managerNumber",
            message: "what is your manager office number?",
            validate: answer => {
                if(answer !==""){
                    return true;
                }
                return "Please enter a number"
            },

        }).then(answer => {
            const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerNumber)
            teamMembers.push(manager);
            idArray.push(answer.managerId);

            console.log(this.answer)

            // inquirer.prompt({
            //     type: "input",
            //     name: "email",
            //     message: "what is your email?",
            //     validate: answer => {
            //         if (answer !== ""){
            //             return true;
            //         }
            //         return "please enter an email."
            //     },
            //     type: "input",
            //     name: "officeNumber"
            // }).then(answer => {
            // (getEmail(answer))
            // console.log(this.email)
            // })
            // type: "list"
            // name: "memberChoice",
            // message: "which type of team member would you like to add?",
            //choices: [
                //"Engineer",
                //"Intern",
                //"I dont want to add any more team members"
            //].then (use if statements to see if you want to add more employees or not)
        })
    }
    createManager();
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
