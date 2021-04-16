const inquirer = require("inquirer")

//require class library
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Team = require("../lib/team")

//prompts are arrays of objects
//employee prompts: name, id, email
//manager prompts: office number
//engineer prompts: github
//intern prompts: school

class Prompts {
    constructor(employeePrompts, managerPrompts, engineerPrompts, internPrompts, menuPrompt){
        this.employeePrompts = employeePrompts,
        this.managerPrompts = [...this.employeePrompts, managerPrompts],
        this.engineerPrompts = [...this.employeePrompts,engineerPrompts],
        this.internPrompts = [...this.employeePrompts, internPrompts],
        this.menuPrompt = [menuPrompt]

    }
    getManagerInfo(){
        const {managerPrompts} = this;
        inquirer.prompt(managerPrompts)
            .then((data)=>new Manager(data.employeeName, data.employeeId, data.employeeEmail, data.officeNum))
            .then((manager)=> this.team.manager = manager)
            .then(()=> this.getMenuInput())
    }
    getEngineerInfo(){
        const {engineerPrompts} = this;
        inquirer.prompt(engineerPrompts)
            .then((data)=>new Engineer(data.employeeName, data.employeeId, data.employeeEmail, data.engineerGithub))
            .then((engineer)=> this.team.engineers.push(engineer))
            .then(()=> this.getMenuInput())
    }
    getInternInfo(){
        const {internPrompts} = this;
        inquirer.prompt(internPrompts)
            .then((data)=>new Intern(data.employeeName, data.employeeId, data.employeeEmail, data.internSchool))
            .then((intern)=> {
                console.log(intern)
                this.team.interns.push(intern)
            })
            .then(()=> this.getMenuInput())
    }

    getMenuInput() {
        const {menuPrompt} = this;
        inquirer.prompt(menuPrompt).then((choice) => this.determineNextPrompt(choice.menu))
    }

    determineNextPrompt(choice){
        switch(choice){
            case "Engineer":
                this.getEngineerInfo()
                break
            case "Intern":
                this.getInternInfo()
                break
            case "Finished":
                this.endPrompt() //return gathered information
        }
    }
    startPrompt(){
        this.team = new Team();
        this.getManagerInfo()

    }

    endPrompt(){
        return this.team
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

const menuPrompt = {
    type: 'list',
    name: 'menu',
    message: 'Please Choose an Employee to Add to Your Team. Select "Finished" when your team has been built.',
    choices: ['Engineer', 'Intern', 'Finished']
}

const prompts = new Prompts(employeePrompts, managerPrompt, engineerPrompt, internPrompt, menuPrompt)

prompts.startPrompt()