const Marketer = require('../models/marketerModel');
const asyncHandler = require('express-async-handler')

// Get all marketers
const getMarketers = asyncHandler (async(req, res) => {
    try {
        const marketers = await Marketer.find({});
        res.status(200).json(marketers);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get marketer by id
const getMarketer = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const marketer = await Marketer.findById(id);
        res.status(200).json(marketer);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a marketer
const createMarketer = asyncHandler (async(req, res) => {
    try {
        const marketer = await Marketer.create(req.body)
        res.status(200).json(marketer);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a marketer
const updateMarketer = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const marketer = await Marketer.findByIdAndUpdate(id, req.body);
        if(!marketer){
            res.status(404);
            throw new Error(`Marketer not found for ${id}`);
        }
        const updatedMarketer = await Marketer.findById(id);
        res.status(200).json(updatedMarketer);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// delete a marketer
const deleteMarketer = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const marketer = await Marketer.findByIdAndDelete(id);
        if(!marketer){
            res.status(404);
            throw new Error(`Marketer not found for ${id}`);
        }
        res.status(200).json(marketer);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = { 
    getMarketers,
    getMarketer,
    createMarketer,
    updateMarketer,
    deleteMarketer

};
 