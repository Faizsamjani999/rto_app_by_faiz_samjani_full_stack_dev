const mongoose = require('mongoose');
const rcTable1 = require('./rc1');

const schema = mongoose.Schema({
    districtId : {type : mongoose.Schema.Types.ObjectId, ref : "rcTable1"},
    series : {
        type : String,
        require : true
    }
})

const rcTable2 = mongoose.model("rcTable2",schema);

module.exports = rcTable2;