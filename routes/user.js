const express = require('express');
const router = express.Router()
const {check} = require('express-validator')
const {createUser, userSignIn} = require('../controllers/user');
const { isAuth } = require('../middleware/auth');
const{validateUserSignUp, userValidation, validateUserSignIn}= require('../middleware/validation/user');
router.post('/create-user', validateUserSignUp, userValidation, createUser );

router.post('/sign-in',validateUserSignIn, userValidation, userSignIn); 

router.post('/create-post', isAuth, (req,res)=>{
    res.send('welcome in secret route')
});

module.exports = router;