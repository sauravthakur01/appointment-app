const express = require('express');
const router = express.Router();
const userDetails = require('../controller/userdetails');

router.post('/adduser',userDetails.postAddUser )

router.get('/users', userDetails.getAllUsers )

router.delete('/delete-user/:userId', userDetails.deleteUser)

module.exports = router ;