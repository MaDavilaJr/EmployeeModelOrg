const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, "team.html");

const createHtml = require('./src/html-template');

const teamArray = [];

function appStart() {
    function askManager() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the manager?'
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is the ID of the manager?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the email of the manager?'
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the office number of the manager?'
            }
        ]).then(response => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            // console.log(manager);
            teamArray.push(manager);
            nextTeamMember();
            // console.log(teamArray)
        })
    }

    function nextTeamMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamChoice',
                message: 'Which type of employee would you like to add?',
                choices: [
                    "Engineer",
                    "Intern",
                    "Done"
                ]
            }
        ]).then(response => {
            if(response.teamChoice === 'Engineer') {
                createEngineer()
            } else if ( response.teamChoice === 'Intern') {
                createIntern()
            } else {
                buildHtml();
            }
        })
    }

    // function createEngineer with all the prompt questions
    function createEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the engineer?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is the ID of the engineer?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the email of the engineer?'
            },
            {
                type: 'input',
                name: 'engineerGitHub',
                message: 'What is the Git Hub name of the engineer?'
            }
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGitHub);
            
            teamArray.push(engineer);
            nextTeamMember();
            
        })
    }
    // function createIntern with all the prompt questions

    function createIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'What is the name of the intern?'
            },
            {
                type: 'input',
                name: 'internId',
                message: 'What is the ID of the intern?'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the email of the intern?'
            },
            {
                type: 'input',
                name: 'internSchool',
                message: 'What is the School name of the intern?'
            }
        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            
            teamArray.push(intern);
            nextTeamMember();
            
        })
    }
    //function buildHtml() will use template and we will pass all the team members array into the template

    function buildHtml() {
        if(!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, createHtml(teamArray), 'utf-8')
    }

    askManager();
}

appStart()