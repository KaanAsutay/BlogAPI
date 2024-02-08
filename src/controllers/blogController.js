"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Catch async-errors and send to errorHandler
require('express-async-errors')

/* ------------------------------------------------------- */

// Call Models:
const {BlogCategory, BlogPost} = require('../models/blogModel')


// -------------------------------------------------------
// BlogCategory
// -------------------------------------------------------
module.exports.BlogCategory = {
    
    list: async (req, res) => {
        const data = await BlogCategory.find()
        
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async (req, res) => {
        const data = await BlogCategory.create(req.body)

        res.status(201).send({
            error: false,
            body: req.body,
            result: data
        })
    },

    read: async (req, res) => {
        // req.params.postId
        // const data = await BlogCategory.findById(req.params.postId)
        const data = await BlogCategory.findOne({ _id: req.params.postId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        // const data = await BlogCategory.findByIdAndUpdate(req.params.postId, req.body, {new: true})
        const data = await BlogCategory.updateOne({ _id: req.params.postId }, req.body)

        res.status(202).send({
            error: false,
            body: req.body,
            result: data, // update infos
            newData: await BlogCategory.findOne({ _id: req.params.postId })
        })
    },

    delete: async (req, res) => {
        const data = await BlogCategory.deleteOne({ _id: req.params.postId })

        res.sendStatus((data.deletedCount >= 1) ? 204 : 404 )
    }
}




// -------------------------------------------------------
// BlogPost
// -------------------------------------------------------
module.exports.BlogPost = {
    
    list: async (req, res) => {
        const data = await BlogPost.find()
        
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    create: async (req, res) => {
        const data = await BlogPost.create(req.body)

        res.status(201).send({
            error: false,
            body: req.body,
            result: data
        })
    },

    read: async (req, res) => {
        // req.params.postId
        // const data = await BlogPost.findById(req.params.postId)
        const data = await BlogPost.findOne({ _id: req.params.postId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        // const data = await BlogPost.findByIdAndUpdate(req.params.postId, req.body, {new: true})
        const data = await BlogPost.updateOne({ _id: req.params.postId }, req.body)

        res.status(202).send({
            error: false,
            body: req.body,
            result: data, // update infos
            newData: await BlogPost.findOne({ _id: req.params.postId })
        })
    },

    delete: async (req, res) => {
        const data = await BlogPost.deleteOne({ _id: req.params.postId })

        res.sendStatus((data.deletedCount >= 1) ? 204 : 404 )
    }
}

