const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    deg : {
        type : String,
        require : true
    },
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const adminSchema = mongoose.model("Admin-Schema",schema);

module.exports = adminSchema;