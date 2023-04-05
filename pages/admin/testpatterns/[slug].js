import React from 'react'
import axios from "axios";
import {useRouter} from 'next/router';
const SinglePage = () => {
  const router = useRouter()
  const { slug } = router.query
  return (
    <div>{slug}</div>
  )
}

export default SinglePage


// export async function getStaticPaths() {
//   const response = await axios.get('https://localhost:3000/api/patterns');
  
//   const paths = response.map(res => {
//     return { params: { slug: res.companyname } };
//   });

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params }) {
//   const response = await axios.get(`https://localhost:3000/api/patterns/${params.slug}`);

//   return {
//     props: {
//       section:response.section,
//       title:response.title,
//       noofques:response.noofques,
//       difficulty:response.difficulty,
//       duration:response.duration
//     },
//   };
// }
