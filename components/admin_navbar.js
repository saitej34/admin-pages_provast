export default function AdminNavbar(){
    return (
        <div class=" flex justify-between bg-gray-100 pb-3">
               <div className="mx-5 mt-4">
                   <img src="https://www.provast.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdj7nomqfd%2Fimage%2Fupload%2Fv1652909540%2Fpvast_B_fpwhlu.png&w=1920&q=75" width="170" height="170"/>
               </div>
               <div>
                    <ul className="flex justify-between mt-4 mx-3">
                      <li className="p-4 hover:text-orange-600 cursor-pointer">Test Patterns</li>
                      <li className="p-4 hover:text-orange-600 cursor-pointer"><a href="/testpatterns">Test</a></li>
                    </ul>
               </div>
               <div className="flex justify-between mr-6">
                   <button className="text-gray-400 px-3 border-gray-400 mx-4 hover:text-gray-500">Test</button>
                   <button  className="text-gray-600 px-3 border-gray-400 mx-4 hover:text-gray-700" >Test</button>
               </div>
        </div>
    )
}