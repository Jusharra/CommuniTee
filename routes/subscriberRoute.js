const express = require('express');
const Subscriber = require('../models/subscriberModel');
const {getSubscribers, getSubscriber, createSubscriber, updateSubscriber, deleteSubscriber} = require('../controllers/subscriberController');

const router = express.Router();

//NOTIFICATIONS
// get all Subscribers
router.get('/', getSubscribers)

// get a Subscriber by id
router.get('/:id', getSubscriber);

// create a Subscriber
router.post('/', createSubscriber);

// update a Subscriber
router.put('/:id', updateSubscriber);

// delete a Subscriber
router.delete('/:id', deleteSubscriber);


module.exports = router;