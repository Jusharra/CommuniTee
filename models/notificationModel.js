const mongoose = require('mongoose');



const notificationSchema = mongoose.Schema(
    {
       body: {
           type: String,
           required: [true, "Please enter a notification message"]
       },
       icon: {
           type: String,
           required: [true, "Please enter a icon image"]
       },
       link: {
           type: String,
           required: [true, "Please enter a URL"]
       },
       tag: {
           type: String,
           required: [true, "Please enter a tag"]
       },
       active: {
        type: Boolean,
        default: true
    }

    },
)

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;