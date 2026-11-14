let mongoose = require("mongoose")

let enquirySchema = mongoose.Schema({

    name : {
        type:String,
        required :true
    },
    email : {
        type : String,
        required: true
    },
    phoneNo : {
        type:String,
        required: true,
        unique : true
    }
    
})

let enquiryModel = mongoose.model("Enquiry-Data", enquirySchema);

module.exports = enquiryModel;