const express = require('express');

const router= express.Router();
const users_controller= require ('../controllers/users_controller');

router.get('/profile',users_controller.profile);

router.get('/posts',users_controller.posts);

router.get('/friends',users_controller.friends);

module.exports = router;


