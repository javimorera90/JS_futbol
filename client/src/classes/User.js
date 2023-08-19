export class User {

    name;
    selectedTeam;

    constructor(){

    }

    setName = (name) => {
        this.name = name;
    }

    setSelectedTeam = (teamId) => {
        this.selectedTeam = teamId;
    }

}