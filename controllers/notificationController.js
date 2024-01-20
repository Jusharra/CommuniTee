const Notification = require('../models/notificationModel')
const asyncHandler = require('express-async-handler')



// Get all notifications
const getNotifications = asyncHandler (async(req, res) => {
    try {
        const notifications = await Notification.find({});
        res.status(200).json(notifications);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

//get notification by id
const getNotification = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const notification = await Notification.findById(id);
        res.status(200).json(notification);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// create a notification
const createNotification = asyncHandler (async(req, res) => {
    try {
        const notification = await Notification.create(req.body)
        res.status(200).json(notification);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// update a notification
const updateNotification = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const notification = await Notification.findByIdAndUpdate(id, req.body);
        if(!notification){
            res.status(404);
            throw new Error(`Notification not found for ${id}`);
        }
        const updatedNotification = await Notification.findById(id);
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})

// delete a notification
const deleteNotification = asyncHandler (async(req, res) => {
    try {
        const {id} = req.params;
        const notification = await Notification.findByIdAndDelete(id);
        if(!notification){
            res.status(404);
            throw new Error(`Notification not found for ${id}`);
        }
        res.status(200).json(notification);

    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})


module.exports = { 
    getNotifications,
    getNotification,
    createNotification,
    updateNotification,
    deleteNotification

};
 