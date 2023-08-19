const connection = require('../config/db');

class StandingsController {

    // 1. Trae una lista de los nombres de todos los equiops
    // localhost:4000/standings/getStandings
    getStandings = (req, res) => {
       let sql = ` SELECT team.team_name, competition.*, goals_for - goals_away as goal_difference 
       FROM competition, team 
       WHERE competition.team_id = team.team_id 
       ORDER BY competition.points DESC, goal_difference DESC, competition.goals_for DESC;`;

       connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
    };


}
module.exports = new StandingsController();