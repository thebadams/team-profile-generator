class Employee {
    constructor(name, id, email){
        this.name = name,
        this.id = id,
        this.email = email
    }
    
    getName() {
        const {name} = this;
        return name;
    }
    
    getId() {
        const {id} = this;
        return id;
    }

    getEmail() {
        const {email} = this;
        return email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee