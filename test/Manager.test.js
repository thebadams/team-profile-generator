const Manager = require("../lib/Manager")

describe("Manager Class", ()=>{
    it("Should be an instance of the Manager Class", ()=>{
        let name = "Juan";
        let id = 5;
        let email = "email@email.org";
        let officenumber = 10;

        let manager = new Manager(name, id, email, officenumber);
        expect(manager).toBeInstanceOf(Manager);
    })

    it("Should have a property, name = name", ()=>{
        let name = "Juan";
        let id = 5;
        let email = "email@email.org";
        let officenumber = 10;

        let manager = new Manager(name, id, email, officenumber);
        expect(manager.name).toEqual(name);
    })

    it("Should have a property, id = id", ()=>{
        let name = "Juan";
        let id = 5;
        let email = "email@email.org";
        let officenumber = 10;

        let manager = new Manager(name, id, email, officenumber);
        expect(manager.id).toEqual(id);
    })

    it("Should have a property, email = email", ()=>{
        let name = "Juan";
        let id = 5;
        let email = "email@email.org";
        let officenumber = 10;

        let manager = new Manager(name, id, email, officenumber);
        expect(manager.email).toEqual(email);
    })

    it("Should have a property, officenumber = officenumber", ()=>{
        let name = "Juan";
        let id = 5;
        let email = "email@email.org";
        let officenumber = 10;

        let manager = new Manager(name, id, email, officenumber);
        expect(manager.officenumber).toEqual(officenumber);
    })

    describe("getRole", ()=>{
        it("Should return 'Manager'", ()=>{
            let name = "Juan";
            let id = 5;
            let email = "email@email.org";
            let officenumber = 10;

            let manager = new Manager(name, id, email, officenumber);
            expect(manager.getRole()).toEqual("Manager")
        })
    })
})