import {useReducer,useState} from 'react';
import swal from 'sweetalert';
import axios from 'axios';

const formReducer = (state,event) =>{
      return {
        ...state,
        [event.target.name]:event.target.value
      }
}

export default function Testpatternsadd(){
    const [count,setcount] = useState(1);
    const [formData,setformData] = useReducer(formReducer,{})
    const [section,setsection] = useState('');
    const [title,settitle] = useState('');
    const [noofques,setques] = useState('');
    const [difficulty,setdiffi] = useState('');
    const [duration,setduration] = useState('');
    const [totalsections,settotalsections] = useState([]);

    const postData = async (url, data) => {
        const response = await axios.post(url, data);
        return response.data;
      };

   const handleFinalSubmit = (e)=>{
       formData.testsections = totalsections;
       const k = postData("http://localhost:3000/api/patterns",formData);
       console.log(k);
       console.log(formData);
       swal(formData.companyname + "  Details Added Successfully")
   }

    const handleSection = (e) =>{
        e.preventDefault();
        setcount(count+1);
        totalsections.push({
            section:section,
            title:title,
            noofques:noofques,
            difficulty:difficulty,
            duration:duration
        });
        setsection('');
        settitle('');
        setques('');
        setdiffi('');
        setduration('');
        
    }
    return (
    <div>
        <form className="grid lg:grid-cols-3 md:grid-cols-1 mx-5">

        <div className="input-type px-2 py-2">
            <input type="text" name="companyname" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Company" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="link" name="logo" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Logo" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="rolename" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Role Name" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="jobtype" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Role Type" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="duration" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Duration" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="overallcutoff" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md focus:border-gray-500" placeholder="Overallcut Off" required/>
        </div>
        
        </form>
        <h3 className=" text-2xl text-gray-500 my-6">Add Test Pattern Section - {count}</h3>


        <form className="grid lg:grid-cols-3 md:grid-cols-2 pt-6 pb-3 mx-5" onSubmit={handleSection}>

        <div className="input-type px-2 py-2">
            <input type="text" name="section"  value={section} onChange={(e)=>{setsection(e.target.value)}} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Section" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="title"  value={title} onChange={(e)=>{settitle(e.target.value)}} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="title" required/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="noofques"  value={noofques} onChange={(e)=>{setques(e.target.value)}} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="No of Questions" required/>
        </div>
        <div className="input-type px-3 py-2 mx-auto">
            <select
                onChange={(e)=>{setdiffi(e.target.value)}}
                className="browser-default custom-select border py-3 px-5">
                <option selected disabled>Difficulty</option>
                <option value="Easy" className="hover:bg-orange-200">Easy</option>
                <option value="Medium" className="hover:bg-orange-200">Medium</option>
                <option value="Hard" className="hover:bg-orange-200">Hard</option>

            </select>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="duration"  value={duration} onChange={(e)=>{setduration(e.target.value)}} className="border w-full px-5 py-3 focus:border-gray-500 rounded-md" placeholder="Duration" required/>
        </div>
        <div className="text-center">
            <button className="rounded border text-gray-800 border-gray-600 cursor-pointer mt-4 px-4 py-2">Add Section {count}</button>
        </div>
        </form>
        <div className="p-3 text-center my-5 mx-5">
             <button className="px-4 py-2 border rounded border-gray-800 text-gray-800 bg-gray-100" onClick={handleFinalSubmit}>Post Patterns</button>
        </div>
    </div>
    )
}