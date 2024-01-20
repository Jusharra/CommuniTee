const express = require('express');
const List = require('../models/listModel');
const {getLists, getList, createList, updateList, deleteList} = require('../controllers/listController');

const router = express.Router();

//NOTIFICATIONS
// get all lists
router.get('/', getLists)

// get a list by id
router.get('/:id', getList);

// create a notification
router.post('/', createList);

// update a notification
router.put('/:id', updateList);

// delete a notification
router.delete('/:id', deleteList);


module.exports = router;