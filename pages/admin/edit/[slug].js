import AdminNavbar from '@/components/admin_navbar';
import {useState} from 'react';
import axios from 'axios';
import swal from 'sweetalert'
export async function getServerSideProps({params}) {
    const str2 = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
    const data = await fetch(`http://localhost:3000/api/patterns/${str2}`);
    const status = await data.json();
    console.log(status)
    return {
      props: {companies : status}
    }
  }


export default function handler({companies}){
    const [newsection,setnew] = useState({
        section:'',
        title:'',
        noofques:'',
        difficulty:'',
        duration:'',
    });
    const [fdata,setfdata] = useState(companies[0].testsections);
    const [compbasic,setcompbasic] = useState({
        companyname : companies[0].companyname,
        logo : companies[0].logo,
        rolename : companies[0].rolename,
        jobtype : companies[0].jobtype,
        duration : companies[0].duration,
        overallcutoff : companies[0].overallcutoff
    });

    const handleChange = (name,value)=>{
        compbasic[name] = value;
        console.log(compbasic);
    }

    const handleSections = (name,value,index) =>{
        for(var i=0;i<fdata.length;i++)
        {
            if(i==index)
            {
                fdata[i][name]=value;
            }
        }
        console.log(fdata);
    }

    const newSectionChange = (name,value) => {
        newsection[name]=value;
        console.log(newsection);
    }

    const addnewSection = (e)=>{
        e.preventDefault();
        fdata.push(newsection);
        console.log(fdata);
        setnew({});
    }


    return (
        <>
           <div>
              <AdminNavbar></AdminNavbar>
              
           </div>
           <div>
           <h1 className="text-center text-2xl my-6">Update Test Patterns</h1>
           <form className="grid lg:grid-cols-3 md:grid-cols-2 pt-6 pb-3 mx-5">
                <div className="input-type px-2 py-2">
                    <input type="text" name="companyname" onChange={(e)=>{handleChange(e.target.name,e.target.value)}} defaultValue={compbasic.companyname} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Company"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="link" name="logo"  onChange={(e)=>{handleChange(e.target.name,e.target.value)}} defaultValue={compbasic.logo} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Logo"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="rolename" onChange={(e)=>{handleChange(e.target.name,e.target.value)}} defaultValue={compbasic.rolename} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Role Name"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="jobtype" onChange={(e)=>{handleChange(e.target.name,e.target.value)}} defaultValue={compbasic.jobtype} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Role Type"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="duration" onChange={(e)=>{handleChange(e.target.name,e.target.value)}} defaultValue={compbasic.duration} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Duration"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="overallcutoff" onChange={(e)=>{handleChange(e.target.name,e.target.value)}} defaultValue={compbasic.duration} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Overallcut Off"/>
                </div>
                </form>
           </div>
           {fdata.map((company)=>{
               return (
                <>
                <h1 className="text-center text-xl my-6">Section {company.title}</h1>
                <form className="grid lg:grid-cols-3 md:grid-cols-2 pt-6 pb-3 mx-5" >

                <div className="input-type px-2 py-2">
                    <input type="text" name="section" defaultValue={company.section} onChange={(e)=>handleSections(e.target.name,e.target.value,fdata.indexOf(company))} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Section"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="title"   defaultValue={company.title} onChange={(e)=>handleSections(e.target.name,e.target.value,fdata.indexOf(company))} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="title"/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="noofques" defaultValue={company.noofques} onChange={(e)=>handleSections(e.target.name,e.target.value,fdata.indexOf(company))} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="No of Questions"/>
                </div>
                <div className="input-type px-2 py-2">
                <select
                    name="difficulty"
                    defaultValue={company.difficulty}
                    onChange={(e)=>{handleSections(e.target.name,e.target.value,fdata.indexOf(company))}}
                    className="browser-default custom-select border py-3 px-5">
                    <option selected disabled>Difficulty</option>
                    <option value="Easy" className="hover:bg-orange-200">Easy</option>
                    <option value="Medium" className="hover:bg-orange-200">Medium</option>
                    <option value="Hard" className="hover:bg-orange-200">Hard</option>

                </select>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="duration" defaultValue={company.duration} onChange={(e)=>handleSections(e.target.name,e.target.value,fdata.indexOf(company))} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Duration"/>
                </div>
                <div className="input-type px-2 py-2 flex justify-center">
                    <button className="rounded border text-gray-800 border-gray-600 cursor-pointer mt-4 px-4 py-2 text-center" onChange={(e)=> deleteSection(e,company.title)}>Delete Section</button>
                </div>
                </form>
                </>
               )
           })}
           <div>
           <h3 className=" text-2xl text-gray-500 my-6">Add Test Pattern Section</h3>


                <form className="grid lg:grid-cols-3 md:grid-cols-2 pt-6 pb-3" onSubmit={addnewSection}>

                <div className="input-type px-2 py-2">
                    <input type="text" name="section" onChange={(e)=>{newSectionChange(e.target.name,e.target.value)}} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Section" required/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="title" onChange={(e)=>{newSectionChange(e.target.name,e.target.value)}}   className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="title" required/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="noofques" onChange={(e)=>{newSectionChange(e.target.name,e.target.value)}}  className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="No of Questions" required/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="difficulty" onChange={(e)=>{newSectionChange(e.target.name,e.target.value)}}  className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Difficulty" required/>
                </div>
                <div className="input-type px-2 py-2">
                    <input type="text" name="duration" onChange={(e)=>{newSectionChange(e.target.name,e.target.value)}} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Duration" required/>
                </div>
                <div className="text-center">
                    <button className="rounded border text-gray-800 border-gray-600 cursor-pointer mt-4 px-4 py-2">Add Section</button>
                </div>
                </form>
           </div>
           <div className="p-3 text-center my-5 mx-5">
             <button className="px-4 py-2 border rounded border-gray-800 text-gray-800 bg-gray-100" >Update Patterns</button>
        </div>
        </>
    )


}