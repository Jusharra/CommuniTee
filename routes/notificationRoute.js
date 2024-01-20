const express = require('express');
const Notification = require('../models/notificationModel');
const {getNotifications, getNotification, createNotification, updateNotification, deleteNotification} = require('../controllers/notificationController');

const router = express.Router();

//NOTIFICATIONS
// get all notifications
router.get('/', getNotifications)

// get a notification by id
router.get('/:id', getNotification);

// create a notification
router.post('/', createNotification);

// update a notification
router.put('/:id', updateNotification);

// delete a notification
router.delete('/:id', deleteNotification);


module.exports = router;