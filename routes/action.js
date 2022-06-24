const express = require('express');

const router = express.Router();

const action_controller = require ('../controllers/action_controller');

router.get('/delete',action_controller.delete);


module.exports= router;