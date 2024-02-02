"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

const nameSchema = new mongoose.Schema({
   // _id: // AUTO CREATED

   // fieldName: String // Shorthand Using

   fieldName: {
        type: String,
        default: null,
        trim: true,
        select: true,
        unique: false,
        index: false,
        // required: true
        required: [true, 'Error-message'],
        enum: [[0, 1, 2, 3, 4], 'Error-Message']
   }

}, {timestamps: true, })