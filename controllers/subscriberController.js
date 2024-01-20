const Subscriber = require('../models/subscriberModel');
const asyncHandler = require('express-async-handler')

// Get all Subscribers
const getSubscribers = asyncHandler (async(req, res) => {
    try {
        const subscribers = await Subscriber.find({});
        res.status(200).json(subscribers);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get subscriber by id
const getSubscriber = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const subscriber = await Subscriber.findById(id);
        res.status(200).json(subscriber);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a subscriber
const createSubscriber = asyncHandler (async(req, res) => {
    try {
        const subscriber = await Subscriber.create(req.body)
        res.status(200).json(subscriber);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a subscriber
const updateSubscriber = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const subscriber = await Subscriber.findByIdAndUpdate(id, req.body);
        if(!subscriber){
            res.status(404);
            throw new Error(`Subscriber not found for ${id}`);
        }
        const updatedSubscriber = await Subscriber.findById(id);
        res.status(200).json(updatedSubscriber);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// delete a subscriber
const deleteSubscriber = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const subscriber = await Subscriber.findByIdAndDelete(id);
        if(!subscriber){
            res.status(404);
            throw new Error(`Subscriber not found for ${id}`);
        }
        res.status(200).json(subscriber);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

module.exports = { 
    getSubscribers,
    getSubscriber,
    createSubscriber,
    updateSubscriber,
    deleteSubscriber

};