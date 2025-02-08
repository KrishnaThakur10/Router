import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  // const[data, setdata] = useState([])
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/KrishnaThakur10")
  //   .then(response => response.json())
  //   .then(data => {
  //     setdata(data)

  //   }, [setdata])
  // })
  return (
    <>
      <div className='text-center text-white bg-gray-600 text-4xl font-bold p-6 rounded'>
        {data.login} : {data.followers}
       <img src={data.avatar_url} alt="" width={180} className='rounded-lg'/>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/KrishnaThakur10")
  return response.json()
}
