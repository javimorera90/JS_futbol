var express = require('express');
const TeamsControllers = require('../controllers/TeamsControllers');


var router = express.Router();

// 1. Trae una lista de los nombres de todos los equiops
// localhost:4000/teams/getTeamsList
router.get('/getTeamsList', TeamsControllers.getTeamsList);

// 2. Trae los detalles basicos de un equipo
// localhost:4000/teams/getTeamBasicInfo/:team_id
router.get('/getTeamBasicInfo/:team_id', TeamsControllers.getTeamBasicInfo);


module.exports = router;