const Manager = require('../models/managerModel');
const asyncHandler = require('express-async-handler')

// Get all managers
const getManagers = asyncHandler (async(req, res) => {
    try {
        const managers = await Manager.find({});
        res.status(200).json(managers);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get manager by id
const getManager = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const manager = await Manager.findById(id);
        res.status(200).json(manager);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a manager
const createManager = asyncHandler (async(req, res) => {
    try {
        const manager = await Manager.create(req.body)
        res.status(200).json(manager);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a manager
const updateManager = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const manager = await Manager.findByIdAndUpdate(id, req.body);
        if(!manager){
            res.status(404);
            throw new Error(`Manager not found for ${id}`);
        }
        const updatedManager = await Manager.findById(id);
        res.status(200).json(updatedManager);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// delete a manager
const deleteManager = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const manager = await Manager.findByIdAndDelete(id);
        if(!manager){
            res.status(404);
            throw new Error(`Manager not found for ${id}`);
        }
        res.status(200).json(manager);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = { 
    getManagers,
    getManager,
    createManager,
    updateManager,
    deleteManager

};