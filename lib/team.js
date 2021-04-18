class Team {
    constructor(manager, engineers = [], interns = []){
        this.manager = manager,
        this.engineers = engineers,
        this.interns = interns
        // this.team = [manager, ...engineers, ...interns]
    }
    setTeam(){
        this.team = [this.manager, ...this.engineers, ...this.engineers]
    }
    generateManagerCard(){

            return `<div class="card">
        <div class="card-body">
            <h5 class="card-title">${this.manager.getRole()}</h5>
            <p class="card-text">${this.manager.name}</p>
            <p class="card-text">${this.manager.email}</p>
            <p class="card-text">${this.manager.id}</p>
            <p class="card-text">${this.manager.officenumber}</p>
        </div>
    </div>`
    }

    generateEngineerCards(){
       return  this.engineers.map((engineer)=>`<div class="card">
        <div class="card-body">
            <h5 class="card-title">${engineer.getRole()}</h5>
            <p class="card-text">${engineer.name}</p>
            <p class="card-text">${engineer.email}</p>
            <p class="card-text">${engineer.id}</p>
            <p class="card-text">${engineer.getGithub()}</p>
        </div>
    </div>`)
    }

    generateInternCards(){
      return  this.interns.map((intern)=>`<div class="card">
        <div class="card-body">
            <h5 class="card-title">${intern.getRole()}</h5>
            <p class="card-text">${intern.name}</p>
            <p class="card-text">${intern.email}</p>
            <p class="card-text">${intern.id}</p>
            <p class="card-text">${intern.getSchool()}</p>
        </div>
    </div>`)
    }

}

module.exports = Team;