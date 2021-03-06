
'use strict';
//THIS IS WHERE I SET UP DIRECTING MY ROUTES

const express = require('express');
const router = express.Router();
const users = require('./users');
const leaderboard = require('./leaderboard');
const payments = require('./payments');
const login = require('./login');
const game = require ('./game');


router.use('/users', users);
router.use('/leaderboard', leaderboard);
router.use('/payments', payments);
router.use('/login', login);
router.use('/game', game);

router.use(function (req, res) {
  res.status(404).end();
});


module.exports = router;