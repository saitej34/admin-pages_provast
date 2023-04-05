import admins from '../databases/admin_model';
import testdetails from '../databases/company_test';
export async function addAdmin(req,res){
    try
    {
        const data = admins(req.body);
        const status = await data.save();
        return res.json({"status":"Admin Added Successfully"});
    }
    catch(err)
    {
        return res.json(err);
    }
   
}

export async function addCompany(req,res)
{
    try
    {
        const data = new testdetails(req.body);
        const status = data.save();
        console.log(status);
        return res.json({"status":"saved"});

    }
    catch(err)
    {
        return res.json(err);
    }
}





//GET company name & details  https://localhost:3000/api/patterns

export async function getAllPatternsCompany(req,res){
     const data = await testdetails.find();
     return res.json(data);


}

//DELETE company name & details  https://localhost:3000/api/patterns

export async function deleteCompany(req,res){
    const deleteid = req.params.deleteid;
    testdetails.deleteOne({ _id: deleteid }, (err) => {
        if (err) {
          return res.status(500).json({status : "500 Internal Server Error"})
        } else {
          return res.status(200).json({"status":"Deleted"})
        }
      });


}
