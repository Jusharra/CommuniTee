const Location = require('../models/locationModel');
const asyncHandler = require('express-async-handler')



// Get all locations
const getLocations = asyncHandler (async(req, res) => {
    try {
        const locations = await Locations.find({});
        res.status(200).json(locations);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get location by id
const getLocation = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const location = await Location.findById(id);
        res.status(200).json(location);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a location
const createLocation = asyncHandler (async(req, res) => {
    try {
        const location = await Location.create(req.body)
        res.status(200).json(location);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a location
const updateLocation = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const location = await Location.findByIdAndUpdate(id, req.body);
        if(!location){
            res.status(404);
            throw new Error(`Location not found for ${id}`);
        }
        const updatedLocation = await Location.findById(id);
        res.status(200).json(updatedLocation);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// delete a location
const deleteLocation = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const location = await Location.findByIdAndDelete(id);
        if(!location){
            res.status(404);
            throw new Error(`Location not found for ${id}`);
        }
        res.status(200).json(location);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


module.exports = { 
    getLocations,
    getLocation,
    createLocation,
    updateLocation,
    deleteLocation

};