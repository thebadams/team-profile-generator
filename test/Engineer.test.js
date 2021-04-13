const Engineer = require("../lib/Engineer")

describe("Engineer Class", ()=>{
    //makes sure that when I say "new Engineer" it in fact creates a new instance of the Engineer class
    it("Should Be an Instance of the Engineer Class", ()=>{
        let name = "John";
        let id = 68;
        let email = "john@email.com"
        let github = "githubusername"
        let engineer = new Engineer(name, id, email, github)
        expect(engineer).toBeInstanceOf(Engineer)
    })

    //makes sure that the properties end up where they are supposed to go

    it("Should have a property, this.name = name", ()=>{
        let name = "John";
        let id = 68;
        let email = "john@email.com"
        let github = "githubusername"
        let engineer = new Engineer(name, id, email, github)
        expect(engineer.name).toEqual(name);
    })

    it("Should have property, this.email = email", ()=>{
        let name = "John";
        let id = 68;
        let email = "john@email.com"
        let github = "githubusername"
        let engineer = new Engineer(name, id, email, github)
        expect(engineer.email).toEqual(email)
    })

    it("Should have property, this.id = id", ()=>{
        let name = "John";
        let id = 68;
        let email = "john@email.com"
        let github = "githubusername"
        let engineer = new Engineer(name, id, email, github)
        expect(engineer.id).toEqual(id)
    })

    it("Should have a property, this.github = github", ()=>{
        let name = "John";
        let id = 68;
        let email = "john@email.com"
        let github = "githubusername"
        let engineer = new Engineer(name, id, email, github)
        expect(engineer.github).toEqual(github)
    })
    
    
        describe("getGithub", ()=>{
            it("Should return the engineer's github username", ()=>{
                let name = "John";
                let id = 68;
                let email = "john@email.com"
                let github = "githubusername"
                let engineer = new Engineer(name, id, email, github)
                expect(engineer.getGithub()).toEqual(github)
            })
        })

        describe("getRole", ()=>{
            it("Should return 'Employee'", ()=>{
                let name = "John";
                let id = 1992;
                let email = "bpeteradams@gmail.com"
                let github = "githubusername"
                let engineer = new Engineer(name, id, email, github)
                expect(engineer.getRole()).toEqual("Engineer")
        })

    })
})