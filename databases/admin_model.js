const {Schema,models,model} = require("mongoose");

const mod = new Schema({
    adminId:{
        type:String,
        required:true
    },
    adminPassword:{
        type:String,
        required:true
    }
})

const admins = models.admins || model("admins",mod);

export default admins;


