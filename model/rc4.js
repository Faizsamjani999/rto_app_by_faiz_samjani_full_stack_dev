const mongoose = require('mongoose');
const rcTable1 = require('./rc1');
const rcTable2 = require('./rc2');
const rcTable3 = require('./rc3');

const schema = mongoose.Schema({
    districtId : {type : mongoose.Schema.Types.ObjectId, ref : "rcTable1"},
    seriesId : {type : mongoose.Schema.Types.ObjectId, ref : "rcTable2"},
    vehicleId : {type : mongoose.Schema.Types.ObjectId, ref : "rcTable3"},
    buyerName : {
        type : String,
        require : true
    },
    buyerNumber : {
        type : String,
        require : true
    },
    buyerLocation : {
        type : String,
        require : true
    }
})

const rcTable4 = mongoose.model("rcTable4",schema);

module.exports = rcTable4;