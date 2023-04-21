import React from 'react'
import {useRouter} from 'next/router';
import AdminNavbar from '@/components/admin_navbar';
import Head from 'next/head';
export async function getServerSideProps({params}) {
    const str2 = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
    const data = await fetch(`http://localhost:3000/api/patterns/${str2}`);
    const status = await data.json();
    console.log(status)
    return {
      props: {companies : status}
    }
  }

const Pattern = ({companies}) => {
const router = useRouter()
const { slug  } = router.query
  return (
    <div>
        <Head>   
                <title>Test Patterns</title>
                <link rel="icon" href="/favicon.ico" />
                <meta charset="UTF-8" />
                <meta name="description"
                    content="Provast Everthing You Need" />
                <meta name="keywords"
                    content="Provast" />
                <meta name="Provast"
                    content="Provast" />
                <meta name="viewport"
                    content="width=device-width, initial-scale=1.0" />
            </Head>
        <AdminNavbar></AdminNavbar>
        <div class="container my-6 text-center">
            <div className="text-center mx-auto">
                <b><h1 className="text-center text-gray-800 my-10 text-2xl">{companies[0].companyname} Test Pattern</h1></b>
                <p className='text-center'>All the details given in the table are a rough estimate. The number of questions and time duration depends and may vary on the respective companies for which the exam is being conducted.</p>
            </div>
            <div className="text-center mt-7">
            <table className="mx-auto w-3/4 text-sm text-center text-gray-900 dark:text-white rounded">
                <thead className="text-xs text-gray-900 uppercase bg-gray-50">
                    <tr>
                    <th className="px-6 py-3">Section</th>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">No of Questions</th>
                    <th className="px-6 py-3">Difficulty</th>
                    <th className="px-6 py-3">Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {companies[0].testsections.map((item, index) => (
                    <tr key={index} className="bg-white border-b dark:bg-gray-200 dark:border-gray-700">
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{item.section}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{item.title}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{item.noofques}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">{item.difficulty}</td>
                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{item.duration}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default Pattern


// import React from 'react'
// import {useRouter} from 'next/router';
// import AdminNavbar from '@/components/admin_navbar';
// import Head from 'next/head';
// export async function getServerSideProps({params}) {
//     const str2 = params.slug.charAt(0).toUpperCase() + params.slug.slice(1);
//     const data = await fetch(`http://localhost:3000/api/patterns/${str2}`);
//     const status = await data.json();
//     console.log(status)
//     return {
//       props: {companies : status}
//     }
//   }
// const Pattern = () => {
//     const router = useRouter()
//     const { slug  } = router.query
//   return (
//     <div>Pattern = {slug}</div>
//   )
// }

// export default Pattern