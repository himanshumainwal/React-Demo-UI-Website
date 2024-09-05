import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams()
  return (
    <div className='text-center text-2xl p-3 m-2 bg-gray-500'>User : {userId}</div>
  )
}

export default User