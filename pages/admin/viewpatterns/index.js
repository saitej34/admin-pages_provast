import AdminNavbar from "@/components/admin_navbar";
import Link from 'next/link';
import Head from 'next/head';
import axios from "axios";
import swal from 'sweetalert';
import {useState} from 'react';
export const getServerSideProps = async() => {
    const data = await fetch("http://localhost:3000/api/patterns");
    const status = await data.json();
    return {
        props : {companies : status}
    };

}


import React from 'react'

const viewpatterns = ({companies}) => {

    const handleDelete = async(cid)=>{
        const status = await axios.delete("http://localhost:3000/api/patterns",{deleteid:cid});
        if(status.status == "Deleted")
        {
            swal("Deleted");
        }
        const updatedCompanies = companies.filter((user) => user.id !== cid);
        companies = updatedCompanies;
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
                    <div className="flex-col justify-between mx-5 my-5 px-2 py-3 border-gray-500 shadow-lg">
                        <img
                            src={company.logo}
                            class="h-auto max-w-full"
                            alt="..." />
                        <br/>
                        <div className="py-2 cursor-pointer">
                            <Link href={`/admin/viewpatterns/${company.companyname}`}>
                            <p className="text-xl text-center text-gray-500 hover:text-orange-600">{company.companyname}</p></Link>
                        </div>
                        <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-4">
                            <button className="px-2 py-1 border rounded border-gray-400 text-gray-800 bg-gray-100 mx-2 cursor-pointer">Edit</button>
                            <button className="px-2 py-1 border rounded border-gray-400 text-gray-800 bg-gray-100 mx-2 cursor-pointer" onClick={(e)=>{handleDelete(company._id)}}>Delete</button>
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