"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

// Call Controllers:
const { BlogPost } = require('../controllers/blogController')

// -------------------------------------------------------
// BlogPost
// -------------------------------------------------------

router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)
router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)

module.exports = router