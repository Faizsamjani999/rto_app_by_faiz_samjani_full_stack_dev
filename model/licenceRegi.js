const mongoose = require('mongoose');

const schema = mongoose.Schema({
    licenceName : {
        type : String,
        require : true
    },
    state : {
        type : String,
        require : true
    },
    districtCode : {
        type : String,
        require : true
    },
    licencenumber : {
        type : String,
        require : true
    },
    registerDate : {
        type : String,
        require : true
    },
    permit : {
        type : String,
        require : true
    },
    image : {
        type : String,
        require : true
    },
    mobile : {
        type : String,
        require : true
    },
    location : {
        type : String,
        require : true
    }
})

const licenceReg = mongoose.model("licenceRegistration",schema);

module.exports = licenceReg;