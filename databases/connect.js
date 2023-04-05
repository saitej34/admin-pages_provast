const mongourl = "mongodb+srv://crud:crud123@cluster0.ligpuzz.mongodb.net/test"

const mongoose = require("mongoose");


const connectMongo = async() =>{
    try
    {
       const {connection} = await mongoose.connect(mongourl,{useNewUrlParser: true, useUnifiedTopology: true})
       if(connection.readyState == 1)
       {
        console.log(connected);
        console.log("Connected to Database");
       }
    }
    catch(error)
    {
        return error
    }
}

export default connectMongo;
