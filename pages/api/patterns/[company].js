import testdetails from '../../../databases/company_test';

export default async function handler(req,res){
    const{company} = req.query;
    const data = await testdetails.find({"companyname":company})
    if(data)
    {
        return res.json(data);
    }
    else
    {
        return res.status(500).json({"Error":"500 Internal Server Error"})
    }
}