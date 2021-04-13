const inquirer = require("inquirer")

//require class library
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//prompts are arrays of objects
//employee prompts: name, id, email
//manager prompts: office number
//engineer prompts: github
//intern prompts: school

class Prompts {
    constructor(employeePrompts, managerPrompts, engineerPrompts, internPrompts){
        this.employeePrompts = employeePrompts,
        this.managerPrompts = [...this.employeePrompts, managerPrompts],
        this.engineerPrompts = [...this.employeePrompts,engineerPrompts],
        this.internPrompts = [...this.employeePrompts, internPrompts]

    }
    getManagerInfo(){
        const {managerPrompts} = this;
        inquirer.prompt(managerPrompts).then((data)=>new Manager(data.employeeName, data.employeeId, data.employeeEmail, data.officeNum));
    }
    getEngineerInfo(){
        const {engineerPrompts} = this;
        inquirer.prompt(engineerPrompts).then((data)=>new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.engineerGithub));
    }
    getInternInfo(){
        const {internPrompts} = this;
        inquirer.prompt(internPrompts).then((data)=>console.log(new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.internSchool)))
    }
}

const namePrompt = {
    type: 'input',
    name: 'employeeName',
    message: "Please Input the Name of the Employee"
}

const idPrompt = {
    type: 'input',
    name: 'employeeId',
    message: "Please Give the Employee's Id Number"
}

const emailPrompt = {
    type: 'input',
    name: 'employeeEmail',
    message: "Please input the employee's email address"
}

const employeePrompts = [namePrompt, idPrompt, emailPrompt]

const managerPrompt = {
    type: 'input',
    name: 'officeNum',
    message: "Please input the manager's office number"
}

const engineerPrompt = {
    type: 'input',
    name: 'engineerGithub',
    message: "Please input the engineer's github username"
}

const internPrompt = {
    type: 'input',
    name: 'internSchool',
    message: "Please input the intern's school"
}

const prompts = new Prompts(employeePrompts, managerPrompt, engineerPrompt, internPrompt)

prompts.getInternInfo()