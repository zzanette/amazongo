const router = require("express").Router();

const jwt = require('jsonwebtoken');

const User = require('../models/user');
const config = require('../config');


router.post('/signup', (req, res, next) => {
    let newUser = new User();
    newUser.email = req.body.email;
    newUser.name = req.body.name;
    newUser.password = req.body.password;
    newUser.picture = newUser.gravatar();
    newUser.isSeller = req.body.isseller;

    User.findOne({email: req.body.email}, (err, user) => {
        if (user) {
            res.json({
                success: false,
                message: 'Account already exists.'
            })
        } else {
            newUser.save();
            
            var token = jwt.sign({
                user: user
            }, config.secret_key, {
                expiresIn: '7d'
            });

            res.json({
                success: true,
                message: 'Enjoy the system...,',
                token: token
            });
        }
    });
});

router.post('/login', (req, res, next) => {
    User.findOne({email: req.body.email}, (err, user) => {

        if (!user) {
            res.json({
                success: false,
                message: 'Authentication failed, E-mail or password is wrong.'
            });
        } else if (user) {
            if(!user.comparePassword(req.body.password)){
                res.json({
                    success: false,
                    message: 'Authentication failed, E-mail or password is wrong.'
                });
            } else {
                var token = jwt.sign({
                    user: user
                }, config.secret_key, {
                    expiresIn: '7d'
                });

                res.json({
                    success: true,
                    message: 'Congrats, Loged in!!',
                    token: token
                });
            }
        }
    });

});

module.exports = router;