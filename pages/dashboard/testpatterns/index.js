import AdminNavbar from "@/components/admin_navbar";
import Link from 'next/link';

export const getServerSideProps = async() => {
    const data = await fetch("http://localhost:3000/api/patterns");
    const status = await data.json();
    return {
        props : {companies : status}
    };

}


import React from 'react'

const viewpatterns = ({companies}) => {

  return (
    <>
    <AdminNavbar></AdminNavbar>
    <div class="container mt-10">
        <h1 className="text-3xl text-center">Test Patterns</h1>  
        <div className="grid lg:grid-cols-5 md:grid-cols-2 pt-6 pb-3">
            {companies.map((company)=>{
                return (
                    <div className="flex-col justify-between mx-5 my-5 px-3 py-4 border-gray-500 shadow-xl">
                        <img
                            src={company.logo}
                            class="h-auto max-w-full"
                            alt="..." />
                        <br/>
                        <div className="py-2 cursor-pointer">
                            <Link href={`/admin/viewpatterns/${company.companyname}`}>
                            <p className="text-xl text-center text-gray-500 hover:text-orange-600">{company.companyname}</p></Link>
                        </div>

                    </div>
                )
            })}
        </div>          
    </div>
    </>
  )
}

export default viewpatterns