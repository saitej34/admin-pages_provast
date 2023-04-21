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
        <h1 className="text-3xl text-center">Test Patterns</h1><br/><br/>
        <div className="mx-5 mt-3 grid grid-cols-1 gap-y-8 gap-x-4 sm:grid-cols-2 lg:grid-cols-6 xl:gap-x-8 my-3">
            {companies.map((company)=>{
                return (
                    <div className="w-full rounded shadow py-4 flex flex-col justify-between">
                            <div className="bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                                <img src={company.logo}
                                     className="h-auto max-w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-center">
                            <Link href={`/admin/viewpatterns/${company.companyname}`}>
                                <h3 className="text-lg font-semibold text-gray-700">
                                    {company.companyname}
                                </h3>
                            </Link>
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