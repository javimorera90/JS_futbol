var express = require('express');
const RoundControllers = require('../controllers/RoundControllers');


var router = express.Router();

// 1. Trae una lista de los nombres de todos los equiops
// localhost:4000/round/:round_id
router.get('/:round_id', RoundControllers.getRound);


module.exports = router;