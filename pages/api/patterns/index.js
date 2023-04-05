import {addCompany,getAllPatternsCompany,deleteCompany} from '../../../databases/admin_controller'
import connectMongo from '@/databases/connect';

export default function handler(req,res){
    connectMongo();
    const method = req.method;
    switch(method)
    {
        case "GET":
            getAllPatternsCompany(req,res);
            break;
        case "POST":
            addCompany(req,res);
            break;
        case "PUT":
            break
        case "DELETE":
            deleteCompany(req,res);

        default:
            res.send("Default");
            break;
    }
    
}