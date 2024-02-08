"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Password Encrypt:
const crypto = require('node:crypto')

const keyCode = process.env.SECRET_KEY || 'write_random_chars_to_here'
const loopCount = 10_000
const charsCount = 32 // write 32 for 64
const encType = 'sha512'