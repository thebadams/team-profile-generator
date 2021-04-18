const Intern = require("../lib/Intern")

describe("Intern Class", ()=>{
    it("Should Be and Instance of the Intern Class", ()=>{
        let name = "Ron";
        let id = 501;
        let email = "ron@mets.com";
        let school = "Ramapo College of New Jersey";

        let intern = new Intern(name, id, email, school);
        expect(intern).toBeInstanceOf(Intern);
    })

    it("Should have a property, name = name", ()=>{
        let name = "Ron";
        let id = 501;
        let email = "ron@mets.com";
        let school = "Ramapo College of New Jersey";

        let intern = new Intern(name, id, email, school);
        expect(intern.name).toEqual(name);
    })

    it("Should have a property, id = id", ()=>{
        let name = "Ron";
        let id = 501;
        let email = "ron@mets.com";
        let school = "Ramapo College of New Jersey";

        let intern = new Intern(name, id, email, school);
        expect(intern.id).toEqual(id);
    })

    it("Should have a property, email = email", ()=>{
        let name = "Ron";
        let id = 501;
        let email = "ron@mets.com";
        let school = "Ramapo College of New Jersey";

        let intern = new Intern(name, id, email, school);
        expect(intern.email).toEqual(email);
    })

    it("Should have a property, school = school", ()=>{
        let name = "Ron";
        let id = 501;
        let email = "ron@mets.com";
        let school = "Ramapo College of New Jersey";

        let intern = new Intern(name, id, email, school);
        expect(intern.school).toEqual(school);
    })

    describe("getSchool", ()=>{
        it("Should return the intern's school", ()=>{
            let name = "Ron";
            let id = 501;
            let email = "ron@mets.com";
            let school = "Ramapo College of New Jersey";

            let intern = new Intern(name, id, email, school);
            expect(intern.getSchool()).toEqual(intern.school);
        })
    })

    describe("getRole", ()=>{
        it("Should return 'Intern'", ()=>{
            let name = "Ron";
            let id = 501;
            let email = "ron@mets.com";
            let school = "Ramapo College of New Jersey";

            let intern = new Intern(name, id, email, school);
            expect(intern.getRole()).toEqual("Intern");
        })
    })


})