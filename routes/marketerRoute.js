const express = require('express');
const Marketer = require('../models/marketerModel');
const {getMarketers, getMarketer, createMarketer, updateMarketer, deleteMarketer} = require('../controllers/marketerController');

const router = express.Router();

//Marketers
// get all marketers
router.get('/', getMarketers)

// get a marketer by id
router.get('/:id', getMarketer);

// create a marketer
router.post('/', createMarketer);

// update a marketer
router.put('/:id', updateMarketer);

// delete a marketer
router.delete('/:id', deleteMarketer);


module.exports = router;