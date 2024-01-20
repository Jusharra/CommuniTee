const List = require('../models/listModel');
const asyncHandler = require('express-async-handler')

// Get all lists
const getLists = asyncHandler (async(req, res) => {
    try {
        const lists = await List.find({});
        res.status(200).json(lists);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get list by id
const getList = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const list = await List.findById(id);
        res.status(200).json(list);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a list
const createList = asyncHandler (async(req, res) => {
    try {
        const list = await List.create(req.body)
        res.status(200).json(list);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a list
const updateList = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const list = await List.findByIdAndUpdate(id, req.body);
        if(!list){
            res.status(404);
            throw new Error(`List not found for ${id}`);
        }
        const updatedList = await List.findById(id);
        res.status(200).json(updatedList);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// delete a list
const deleteList = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const list = await List.findByIdAndDelete(id);
        if(!list){
            res.status(404);
            throw new Error(`List not found for ${id}`);
        }
        res.status(200).json(list);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})




module.exports = { 
    getLists,
    getList,
    createList,
    updateList,
    deleteList

};