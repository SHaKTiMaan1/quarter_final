var mongoose = require("mongoose");

var cciEmployeeSchema = new mongoose.Schema({
    cci_id     : {
        type        : String,
    },
    fname : {
        type        : String,
        required    : true,
        min         : 3,
        max         : 255
    },
    lname : {
        type        : String,
        required    : true,
        min         : 3,
        max         : 255
    },
    district : {
        type        : String,
        required    : true,
        min         : 3,
        max         : 255
    },
    state : {
        type        : String,
        required    : true,
        min         : 3,
        max         : 255
    },
    contactNumber   : {
        type        : Number,
        min         : 1111111111,
        max         : 9999999999
    },
    email : {
        type        : String,
        required    : true,
        min         : 7,
        max         : 255
    },
    password : {
        type        : String,
        required    : true,
        max         : 1024,
        min         : 4
    }
});

module.exports = mongoose.model("CciEmployee",cciEmployeeSchema);