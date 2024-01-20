const mongoose = require('mongoose');


const listSchema = mongoose.Schema(
    {
       listname: {
           type: String,
           required: [true, "Please enter a list name"]
       },
       description: {
           type: String,
           required: [true, "Please enter a description"]
       },
       active: {
        type: Boolean,
        default: true
    }
    
    },
)

const List = mongoose.model('List', listSchema);

module.exports = List;