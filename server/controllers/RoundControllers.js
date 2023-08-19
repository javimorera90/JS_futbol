const connection = require('../config/db');

class RoundControllers {

    // 1. Trae una lista de los nombres de todos los equiops
    // localhost:4000/round/:round_id
    getRound = (req, res) => {
        

       let sql = `SELECT game.round, 
       (SELECT team_name FROM team WHERE team_id = game.home_team) AS home_team_name,
       (SELECT team_id FROM team WHERE team_id = game.home_team) AS home_team_id,
       (SELECT team_name FROM team WHERE team_id = game.away_team) AS away_team_name,
       (SELECT team_id FROM team WHERE team_id = game.away_team) AS away_team_id
       FROM game, team 
       where round = ${req.params.round_id}
           AND game.home_team = team.team_id`

       connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
    };


}
module.exports = new RoundControllers();