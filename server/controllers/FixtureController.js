const connection = require('../config/db');

class FixtureController {

    // 1. Trae el fixture de la fecha :round_id
    // localhost:4000/fixture/round/:round_id   
    getRound = (req, res) => {
        
        let sql = `SELECT fixture.round, 
        (SELECT team_name FROM team WHERE team_id = fixture.home_team) AS home_team_name,
        fixture.home_team AS home_team_id,
        (SELECT team_name FROM team WHERE team_id = fixture.away_team) AS away_team_name,
		fixture.away_team AS away_team_id
        FROM fixture, team 
        where round = ${req.params.round_id}
        AND fixture.home_team = team.team_id`

       connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
    };

    // 3. Trae los proximos 5 partidos del equipo
    // localhost:4000/fixture/nextMatches/:round_id/:team_id
    getLastMatches = (req, res) => {
        
        let sql = `SELECT DISTINCT fixture.round, 
        (SELECT team_name FROM team WHERE team_id = fixture.home_team) AS home_team_name,
        fixture.home_team AS home_team_id,
        (SELECT team_name FROM team WHERE team_id = fixture.away_team) AS away_team_name,
        fixture.away_team AS away_team_id,
        CONCAT(fixture.goals_home, " - ", fixture.goals_away) AS result,
        fixture.winner
        FROM fixture, team 
        WHERE (fixture.home_team = ${req.params.team_id}
        OR fixture.away_team = ${req.params.team_id})
        AND round < ${req.params.round_id}
        AND round > ${req.params.round_id - 6}
        ORDER BY round ASC
        LIMIT 5`

       connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
    };

    // 3. Trae los proximos 5 partidos del equipo
    // localhost:4000/fixture/nextMatches/:round_id/:team_id
    getNextMatches = (req, res) => {
        
        let sql = `SELECT DISTINCT fixture.round, 
        (SELECT team_name FROM team WHERE team_id = fixture.home_team) AS home_team_name,
        fixture.home_team AS home_team_id,
        (SELECT team_name FROM team WHERE team_id = fixture.away_team) AS away_team_name,
		fixture.away_team AS away_team_id
        FROM fixture, team 
        WHERE (fixture.home_team = ${req.params.team_id}
        OR fixture.away_team = ${req.params.team_id})
        AND round >= ${req.params.round_id}
        ORDER BY round ASC
        LIMIT 5`

       connection.query(sql, (error, result) => {
            error
            ? res.status(400).json({error})
            : res.status(200).json(result);
        });
    };


}
module.exports = new FixtureController();