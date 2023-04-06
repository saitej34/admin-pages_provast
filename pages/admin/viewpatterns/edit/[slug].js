import {useRouter} from 'next/router';


export default function handler(){
    const router = useRouter()
    const { slug  } = router.query
    return (
        <h1>Edit the company {slug}</h1>
    )
}