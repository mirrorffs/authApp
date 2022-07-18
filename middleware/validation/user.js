const {check, validationResult} = require('express-validator')

exports.validateUserSignUp=[
    check('fullname').trim().not().isEmpty().isString().withMessage('Must be valid name').isLength({min: 3, max: 20}).withMessage('Max size allowed 3 to 20 characters!'),
    check('email').normalizeEmail().isEmail().withMessage('Invalid Email!'),
    check('password').trim().not().isEmpty().withMessage('Password is empty').isLength({min: 3, max:20}).withMessage('Max size allowed 3 to 20 characters!'),
    check('confirmPassword').trim().not().isEmpty().custom((value, {req})=>{
        if(value !== req.body.password){
            throw new Error('Passwords do not match')
        }return true;
    })
];

exports.userValidation = (req, res, next) => {
    const result = validationResult(req).array();
    if(!result.length) return next();

    const error = result[0].msg;
    res.json({success: false, message: error})
};

exports.validateUserSignIn = [
    check('email').trim().isEmail().withMessage('email required'),
    check('password').trim().not().isEmpty().withMessage('password required'),

];


