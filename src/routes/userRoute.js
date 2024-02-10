"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

const { User } = require('../controllers/userController')

// -------------------------------------------------------
// User
// -------------------------------------------------------

router.route('/')
    .get(User.list)
    .post(User.create)

router.route('/:userId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)

// Login:


module.exports = router