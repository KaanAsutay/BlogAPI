"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

const { User } = require('../controllers/userController')

// -------------------------------------------------------
// User
// -------------------------------------------------------
router.route('/user')
    .get(User.list)
    .post(User.create)
router.route('/user/:userId')
    .get(User.read)
    .put(User.update)
    .delete(User.delete)