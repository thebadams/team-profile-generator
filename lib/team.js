class Team {
    constructor(manager, engineers, interns){
        this.manager = manager,
        this.engineers = engineers,
        this.interns = interns,
        this.team = [manager, ...engineers, ...interns]
    }
}