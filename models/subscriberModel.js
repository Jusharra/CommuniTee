const mongoose = require('mongoose');


const subscriberSchema = mongoose.Schema(
    {
       firstname: {
           type: String,
           required: [true, "Please enter first name"]
       },
       lastname: {
           type: String,
           required: [true, "Please enter last name"]
       },
        email: {
            type: String,
            required: [true, "Please enter email"]
        },
        phone: {
            type: Number,
            required: [true, "Please enter a phone number"]
        },
        image: {
            type: String,
            required: [true, "Please upload an image"]
        },
        active: {
            type: Boolean,
            default: true
        }

    },
)

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;