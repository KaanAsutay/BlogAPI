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
        // req.params.categoryId
        // const data = await BlogCategory.findById(req.params.categoryId)
        const data = await BlogCategory.findOne({ _id: req.params.categoryId })

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {
        // const data = await BlogCategory.findByIdAndUpdate(req.params.categoryId, req.body, {new: true})
        const data = await BlogCategory.updateOne({ _id: req.params.categoryId }, req.body)

        res.status(202).send({
            error: false,
            body: req.body,
            result: data, // update infos
            newData: await BlogCategory.findOne({ _id: req.params.categoryId })
        })
    },

    delete: async (req, res) => {
        const data = await BlogCategory.deleteOne({ _id: req.params.categoryId })

        res.sendStatus((data.deletedCount >= 1) ? 204 : 404 )
    }
}

// -------------------------------------------------------
// BlogPost
// -------------------------------------------------------
module.exports.BlogPost = {
    
    list: async (req, res) => {

        // Searching & Sorting & Pagination:

        // SEARCHING: URL?search[key1]=value1&search[key2]=value2
        const search = req.query?.search || {}

        // console.log(search)
        for (let key in search) search[key] = {  $regex: search[key], $options: 'i'  }
        // console.log(search)

        // SORTING: URL?sort[key1]=1&sort[key2]=-1 (1: ASC, -1:DESC)
        const sort = req.query?.sort || {}
        // console.log(sort)

        // PAGINATION: URL?page=1&limit=10
        // let limit =  req.query?.limit || (process.env.PAGE_SIZE || 20)
        // limit = Number(limit)

        let limit =  Number(req.query?.limit || (process.env.PAGE_SIZE || 20))
        // console.log('limit', typeof limit, limit)
        let page = Number(req.query?.page || 1)
        console.log('page', typeof page, page)

        const data = await BlogPost.find( search ).sort( sort ) // i: case Insensitive

        // const data = await BlogPost.find().populate('blogCategoryId') // get Primary Data
        
        res.status(200).send({
            error: false,
            count: data.length,
            result: data
        })
    },

    listInCategory: async (req, res) => {
        const data = await BlogPost.find({ blogCategoryId: req.params.categoryId }).populate('blogCategoryId') // get Primary Data
        
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
        const data = await BlogPost.findOne({ _id: req.params.postId }).populate('blogCategoryId') // get Primary Data

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

