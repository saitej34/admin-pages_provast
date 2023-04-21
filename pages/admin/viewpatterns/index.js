import AdminNavbar from "@/components/admin_navbar";
import Link from 'next/link';
import Head from 'next/head';
import axios from "axios";
import swal from 'sweetalert';


export const getServerSideProps = async() => {
    const data = await fetch("http://localhost:3000/api/patterns");
    const status = await data.json();
    return {
        props : {companies : status}
    };

}


import React,{useState} from 'react';

const viewpatterns = ({companies}) => {
    const handleDelete = async(cname)=>{
        console.log(cname);
        const com = companies.filter((company)=> company.companyname != cname);
        const status = await axios.delete(`http://localhost:3000/api/patterns/${cname}`,);
        if(status)
        swal(cname  + " Data Deleted", {
            icon: "success",
          });
    }

  return (
    <>
            <Head>
                <title>Test Patterns</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charset="UTF-8" />
                <meta name="description"
                    content="NextJS Head component" />
                <meta name="keywords"
                    content="HTML, CSS, JavaScript, NextJS" />
                <meta name="author"
                    content="" />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0" />
            </Head>
     <AdminNavbar></AdminNavbar>
    <div class="container mt-10">
        <h1 className="text-3xl text-center">Test Patterns</h1>  
        <div className="grid lg:grid-cols-6 md:grid-cols-2 pt-6 pb-3">
            {companies.map((company)=>{
                return (
                    // <div className="flex-col justify-between mx-5 my-5 px-2 py-3 border-gray-500 shadow-lg">
                    //     <div className="w-full">
                    //         <img
                    //             src={company.logo}
                    //             class="h-auto max-w-full"
                    //             alt="..." />
                    //     </div>
                    //     <br/>
                    //     <div className="py-2 cursor-pointer">
                    //         <Link href={`/admin/viewpatterns/${company.companyname}`}>
                    //         <p className="text-xl text-center text-gray-500 hover:text-orange-600">{company.companyname}</p></Link>
                    //     </div>
                    //     <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-4 gap-2">
                    //         <button className="px-2 py-1 border rounded border-gray-400 text-gray-800 bg-gray-100 mx-2 cursor-pointer"><Link href={`/admin/viewpatterns/edit/${company.companyname}`}>Edit</Link></button>
                    //         <button className="px-2 py-1 border rounded border-gray-400 text-gray-800 bg-gray-100 mx-2 cursor-pointer" onClick={(e)=>{handleDelete(company.companyname)}}>Delete</button>
                    //     </div>

                    // </div>
                    <div className="flex-col justify-around mx-5 my-3 px-2 py-2 border-gray-400 shadow-md">
                        <div className="w-full h-[150px]">
                              <img
                                src={company.logo}
                                class="h-auto max-w-full"
                                alt="..." />
                        </div>
                        <div className="py-2 cursor-pointer">
                               <Link href={`/admin/viewpatterns/${company.companyname}`}>
                               <p className="text-xl text-center text-gray-500 hover:text-orange-600">{company.companyname}</p></Link>
                        </div>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-4 gap-3">
                               <button className="px-2 py-1 border rounded border-gray-400 text-gray-800 bg-gray-100 mx-2 cursor-pointer"><Link href={`/admin/viewpatterns/edit/${company.companyname}`}>Edit</Link></button>
                               <button className="px-2 py-1 border rounded border-gray-400 text-gray-800 bg-gray-100 mx-2 cursor-pointer" onClick={(e)=>{handleDelete(company.companyname)}}>Delete</button>
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