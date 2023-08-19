var express = require('express');
const StandingsController = require('../controllers/StandingsController');

var router = express.Router();

// 1. Trae una lista de los nombres de todos los equiops
// localhost:4000/standings/getStandings
router.get('/getStandings', StandingsController.getStandings);


module.exports = router;