const connection = require('../config/db');

class TeamsController {

    // 1. Trae una lista de los nombres de todos los equiops
    // localhost:4000/teams/getTeamsList
    getTeamsList = (req, res) => {
       let sql = `SELECT team_name, team_id FROM team`;

       connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
    };


    getTeamBasicInfo = (req, res) => {
        const team_id = req.params.team_id;

        let sql = `SELECT team.*, team_attribute.attribute_value, attribute.* FROM team, team_attribute, attribute
        WHERE team.team_id = team_attribute.team_id
        AND team_attribute.attribute_id = attribute.attribute_id
        AND team.team_id = ${team_id}`

        connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
 
    };

}
module.exports = new TeamsController();