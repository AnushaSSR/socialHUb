const express= require('express');
const router= express.Router();

const homeController = require('../controllers/home_controller')

console.log("router loaded");

router.get('/',homeController.home);

// to render when use chcek for his dashboard

router.get('/dashboard',homeController.dashboard);


router.use('/users',require('./users'));



router.use('/action',require('./action'));
// for any further routes, accessed from here
//router.use('/ruter-name,require(./routerfile));
module.exports = router;

