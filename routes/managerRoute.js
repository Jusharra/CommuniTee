const express = require('express');
const Manager = require('../models/managerModel');
const {getManagers, getManager, createManager, updateManager, deleteManager} = require('../controllers/managerController');

const router = express.Router();

//MANAGERS
// get all managers
router.get('/', getManagers)

// get a manager by id
router.get('/:id', getManager);

// create a manager
router.post('/', createManager);

// update a manager
router.put('/:id', updateManager);

// delete a manager
router.delete('/:id', deleteManager);


module.exports = router;