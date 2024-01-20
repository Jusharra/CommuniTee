const mongoose = require('mongoose');


const marketerSchema = mongoose.Schema(
    {
       businessname: {
           type: String,
           required: [true, "Please enter a business name"]
       },
       contactname: {
           type: String,
           required: [true, "Please enter contact name"]
       },
        email: {
            type: String,
            required: [true, "Please enter email"]
        },
        phone: {
            type: Number,
            required: [true, "Please enter a phone number"]
        },
        logo: {
            type: String,
            required: [true, "Please upload an image"]
        },
        description: {
            type: String,
            required: [true, "Please enter a description"]
        },
        businessaddress: {
            type: String,
            required: [true, "Please enter a business address"]
        },
        businesscity: {
            type: String,
            required: [true, "Please enter a business city"]
        },
        businessstate: {
            type: String,
            required: [true, "Please enter a business state"]
        },
        businesswebsite: {
            type: String,
            required: [true, "Please enter a business website"]
        },
        businessindustry: {
            type: String,
            required: [true, "Please enter a business industry"]
        },
        active: {
            type: Boolean,
            default: true
        }

    },
)

const Marketer = mongoose.model('Marketer', marketerSchema);

module.exports = Marketer;