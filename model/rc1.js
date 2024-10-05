const mongoose = require('mongoose');

const schema = mongoose.Schema({
    district : {
        type : String,
        require : true
    }
})

const rcTable1 = mongoose.model("rcTable1",schema);

module.exports = rcTable1;