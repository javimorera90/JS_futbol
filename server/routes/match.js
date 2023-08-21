var express = require('express');
const MatchController = require('../controllers/MatchController');

var router = express.Router();

// 1. 
// localhost:4000/match/playMatch/:game_id
router.get('/round/:round_id', MatchController.playMatch);


module.exports = router;