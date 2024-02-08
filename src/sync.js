"use strict"

const { BlogCategory, BlogPost } = require('./models/blogModel')

module.exports = async () => {

    /* BlogCategory */

    // Get first blogCategory:
    const blogCategory = await BlogCategory.findOne()
    // console.log(blogCategory._id)

    if (blogCategory) {
        const isUpdated = await BlogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } // field yok ise
        }, { //? Update:
            "blogCategoryId": blogCategory._id // kaydı ata
            // $unset: { "blogCategoryId": 1 } // field sil
        }).catch(err => console.log(err))
        // console.log(isUpdated)
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */
}
