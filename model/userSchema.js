const mongoose = require('mongoose');

const schema = mongoose.Schema({
    fname : {
        type : String,
        require : true
    },
    lname : {
        type : String,
        require : true
    },
    number : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
})

const userSchema = mongoose.model("user-schema",schema);

module.exports = userSchema;