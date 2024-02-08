"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

/* ------------------------------------------------------- *

const nameSchema = new mongoose.Schema({
   // _id: // AUTO CREATED

   // fieldName: String // Shorthand Using

   fieldName: {
        type: String,  // veri tipi
        default: null, // Default bir değer atayabiliriz
        trim: true,    // Gelen veriyi trim'den geçir: trim(data)
        unique: false, // Daha hızlı erişim olsun mu ?
        select: true,  // Show-UnShow
        index: false,  // Benzersiz kayıt olsun mu ?
        required: [true, 'Error-message'], // JSON data içinde gelmsei zorunlu mu ?
        enum: [[0, 1, 2, 3, 4], 'Error-Message'], // Pattern/Constraint/Choices
        validate: [function(data) {return true}, 'Error-Message'],
        get: function(data) {return true}, // Veri çağırırken çalıştırılacak fonksiyon
        set: function(data) {return true}, // Veri kaydederken çalıştırılacak fonksiyon
   }

}, {
    collection: 'collectionName', // Tablo ismi ne olsun ? 
    timestamps: true // Create and Manage 'createdAt' and 'updatedAt'
})

/* ------------------------------------------------------- */
// -------------------------------------------------------
// BlogCategory 
// -------------------------------------------------------

const blogCategorySchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true
    }

}, {collection: 'blogCategories', timestamps: true})



// -------------------------------------------------------
// BlogPost 
// -------------------------------------------------------

const blogPostSchema = new mongoose.Schema({

    // _id

    title: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    published: {
        type: Boolean,
        default: true
    }

    // createdAt
    // updatedAt

}, { collection: 'blogPosts', timestamps: true })

// const BlogPostModel = mongoose.model('BlogPost', blogPostSchema)

// module.exports = {
//     // blogCategory:
//     BlogPost: blogPostModel
// }

module.exports = {
    BlogCategory: mongoose.model('BlogCategory', blogCategorySchema),
    BlogPost: mongoose.model('BlogPost', blogPostSchema)
}