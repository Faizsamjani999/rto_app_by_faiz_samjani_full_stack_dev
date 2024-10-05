const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ownerName : {
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
    seriesCode : {
        type : String,
        require : true
    },
    numberVehicle : {
        type : String,
        require : true
    },
    registerDate : {
        type : String,
        require : true
    },
    typeVehicle : {
        type : String,
        require : true
    },
    modelVehicle : {
        type : String,
        require : true
    },
    companyVehicle : {
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

const vehicleReg = mongoose.model("vehicleRegistration",schema);

module.exports = vehicleReg;