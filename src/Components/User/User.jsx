import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center text-white bg-gray-600 text-4xl font-bold p-6'>
      User: {userid}
    </div>
  )
}

export default User
