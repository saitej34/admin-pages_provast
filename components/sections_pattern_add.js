import {useReducer} from 'react'
import swal from 'sweetalert'
const formReducer = (state,event) =>{
      return {
        ...state,
        [event.target.name]:event.target.value
      }
}


export default function SectionsPatternsadd(){
    const [formData,setformData] = useReducer(formReducer,{})

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData == null) return console.log("Empty Data")
        console.log(formData)
        swal("Data Added");
    }
    return (
        <form className="grid lg:grid-cols-3 md:grid-cols-2 pt-6 pb-3" onSubmit={handleSubmit}>

        <div className="input-type px-2 py-2">
            <input type="text" name="section" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Section"/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="title" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="title"/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="noofques" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="No of Questions"/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="difficulty" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Difficulty"/>
        </div>
        <div className="input-type px-2 py-2">
            <input type="text" name="duration" onChange={setformData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Duration"/>
        </div>
        <div className="text-center">
            <button className="rounded border text-gray-800 border-gray-600 cursor-pointer mt-4 px-4 py-2">Add a Section</button>
        </div>
        </form>
    )
}