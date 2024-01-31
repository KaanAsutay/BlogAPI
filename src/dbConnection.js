"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/')
    .then(() => console.log(' * DB Connected * '))
    .catch((err) => console.log(' * DB Not Connected * ', err))