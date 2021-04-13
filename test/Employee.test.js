const Employee = require("../lib/Employee")


describe("Employee Class", ()=>{
    it("Should be an instance of the Employee Class", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com"
        let employee = newEmployee(name, id, email)
        expect(employee).toBeInstanceOf(Employee);
    })

    it("Should set the passed name to be this.name", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com";
        let employee = new Employee(name, id, email)
        expect(employee.name).toEqual(name);
    })
    
    it("Should set the passed id number to be this.id", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com";
        let employee = new Employee(name, id, email);
        expect(employee.id).toEqual(id);
    })

    it("Should set the passed email to be this.email", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com";
        let employee = new Employee(name, id, email);
        expect(employee.email).toEqual(email);
    })
})

describe("getName", ()=>{
    it("Should return this.name", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com"
        let employee = new Employee(name, id, email)
        expect(employee.getName()).toEqual(employee.name)
    })
})

describe("getId", ()=>{
    it("Should return this.id", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com"
        let employee = new Employee(name, id, email)
        expect(employee.getId()).toEqual(employee.id)
    })
})

describe("getEmail", ()=>{
    it("Should return this.email", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com"
        let employee = new Employee(name, id, email)
        expect(employee.getName()).toEqual(employee.email)
    })
})

describe("getRole", ()=>{
    it("Should return this.name", ()=>{
        let name = "Brian";
        let id = 1992;
        let email = "bpeteradams@gmail.com"
        let employee = new Employee(name, id, email)
        expect(employee.getRole()).toEqual("Employee")
    })
})