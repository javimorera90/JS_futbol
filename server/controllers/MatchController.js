const connection = require('../config/db');
const { obtenerNumeroAleatorio } = require('../utils/obtenerNumeroAleatorio');

class MatchController {

    // 1. Juega el partido indicado en :game_id
    // localhost:4000/match/playMatch/:game_id   
    playMatch = (req, res) => {

        let home_team_id;
        let away_team_id;

        let home_team_details;
        let away_team_details;
        
        let sql = `SELECT home_team, away_team 
        FROM fixture
        WHERE game_id = ${req.params.game_id};`

       connection.query(sql, (error, result) => {
            error && res.status(400).json({error});

            home_team_id = result.home_team;
            away_team_id = result.away_team;
        });

        let sql_home_team_details = `SELECT * FROM team, team_attribute, attribute
        WHERE team.team_id = ${home_team_id}
        AND team.team_id = team_attribute.team_id
        AND team_attribute.attribute_id = attribute.attribute_id;`

       connection.query(sql_home_team_details, (error, home_team_details_result) => {
            error && res.status(400).json({error});
            home_team_details = home_team_details_result;
        });

        let sql_away_team_details = `SELECT * FROM team, team_attribute, attribute
        WHERE team.team_id = ${away_team_id}
        AND team.team_id = team_attribute.team_id
        AND team_attribute.attribute_id = attribute.attribute_id;`

       connection.query(sql_away_team_details, (error, away_team_details_result) => {
            error && res.status(400).json({error});
            away_team_details = away_team_details_result;
        });

    };


}
module.exports = new MatchController();