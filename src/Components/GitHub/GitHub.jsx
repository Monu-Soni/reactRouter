import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
    const Data = useLoaderData()

    return (
        <>
            <h1 className='text-center'>Followers: {Data.followers} </h1>
            <img src={Data.avatar_url} alt="monu-soni" className='rounded-full' />
        </>
    )
}


export const GitHubLoader = async () => {
    const Response = await fetch("https://api.github.com/users/Monu-Soni")
    return Response.json()
}
