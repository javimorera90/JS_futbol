var express = require('express');
const FixtureController = require('../controllers/FixtureController');


var router = express.Router();

// 1. Trae el fixture de la fecha :round_id
// localhost:4000/fixture/round/:round_id
router.get('/round/:round_id', FixtureController.getRound);

// 2. Trae los últimos 5 partidos del equipo
// localhost:4000/fixture/lastMatches/:round_id
router.get('/lastMatches/:round_id/:team_id', FixtureController.getLastMatches);

// 3. Trae los proximos 5 partidos del equipo
// localhost:4000/fixture/nextMatches/:round_id/:team_id
router.get('/nextMatches/:round_id/:team_id', FixtureController.getNextMatches);


module.exports = router;