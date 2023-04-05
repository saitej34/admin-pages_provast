import connectMongo from '../../../databases/connect';
import admins from '../../../databases/admin_model';
export default async function handler(req,res){
    connectMongo();
     const {method} = req;
     switch(method)
     {
        case "GET":
            return res.json({"method":"GET"});
        case "POST":
            const {adminId,adminPassword} = req.body;
            var pushdata = new admins({
                adminId:adminId,
                adminPassword:adminPassword
            })
            console.log("in post",pushdata);
            var resp = await pushdata.save();
            return res.send({"status":"Added Successfully"}); 
        default:
            console.log("Invalid Request");   

     }
     res.send({"body":req.body})
}