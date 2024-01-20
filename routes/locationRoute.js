const express = require('express');
const Location = require('../models/locationModel');
const {getLocations, getLocation, createLocation, updateLocation, deleteLocation} = require('../controllers/locationController');


const router = express.Router();

// LOCATIONS
// get all locations
router.get('/', getLocations)

// get a location by id
router.get('/:id', getLocation);

// create a location
router.post('/', createLocation);

// update a location
router.put('/:id', updateLocation);

// delete a location
router.delete('/:id', deleteLocation);


module.exports = router;