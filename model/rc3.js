const mongoose = require('mongoose');
const rcTable1 = require('./rc1');
const rcTable2 = require('./rc2');

const schema = mongoose.Schema({
    districtId : {type : mongoose.Schema.Types.ObjectId, ref : "rcTable1"},
    seriesId : {type : mongoose.Schema.Types.ObjectId, ref : "rcTable2"},
    vehicle : {
        type : String,
        require : true
    }
})

const rcTable3 = mongoose.model("rcTable3",schema);

module.exports = rcTable3;