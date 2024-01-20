const mongoose = require('mongoose');


const locationSchema = mongoose.Schema(
    {
       name: {
           type: String,
           required: [true, "Please enter a location name"]
       },
       description: {
           type: String,
           required: [true, "Please enter a description"]
       },
       country: {
           type: String,
           required: [true, "Please enter a country"]
       },
       city: {
           type: String,
       },
       state: {
            type: String,
            required: [true, "Please enter a state"]
       },
       longitude: {
           type: String,
           required: [true, "Please enter a longitude"]
       },
       latitude: {
        type: String,
        required: [true, "Please enter a latitude"]
    },
    active: {
        type: Boolean,
        default: true
    }

    },
)

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;