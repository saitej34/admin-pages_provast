const {models,model,Schema} = require("mongoose")



const sectionsSchema = new Schema({
    section:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    noofques:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }
})



const testmod = new Schema({
    companyname:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    rolename:{
        type:String,
        required:true
    },
    jobtype:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    overallcutoff:{
        type:String,
        required:true
    },
    testsections:{
        type:[
            {
                section:{
                    type:String,
                    required:true
                },
                title:{
                    type:String,
                    required:true
                },
                noofques:{
                    type:String,
                    required:true
                },
                difficulty:{
                    type:String,
                    required:true
                },
                duration:{
                    type:String,
                    required:true
                }
            }
        ],
        required:true
    }

})



const testmodel = models.testdetails || model("testdetails",testmod);

export default testmodel;