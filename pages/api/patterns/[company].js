import testdetails from '../../../databases/company_test';
import connectMongo from '@/databases/connect';

export default async function handler(req,res){
    connectMongo();
    const method = req.method;
    const {company} = req.query;
    switch(method)
    {
        case "GET":
            const data = await testdetails.find({"companyname":company})
            if(data)
            {
                return res.json(data);
            }
            else
            {
                return res.status(500).json({"Error":"500 Internal Server Error"})
            }
            break;
        case "DELETE":
            const status = await testdetails.deleteOne({companyname: company });
            return res.json(status);
            break;
        default:
            res.send("Default");
            break;
    }





}