"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { BlogPost } = require('../controllers/blogController')

// -------------------------------------------------------
// BlogPost
// -------------------------------------------------------

Router.route('/post')
    .get(BlogPost.list)
    .post(BlogPost.create)
Router.route('/post/:postId')
    .get(BlogPost.read)
    .put(BlogPost.update)
    .delete(BlogPost.delete)