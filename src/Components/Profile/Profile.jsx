import React, { useContext } from 'react'
import UserContext from '../../Context/UserContext'


function Profile() {
    const { user } = useContext(UserContext)
    if (!user) {
        return <div className='text-3xl text-red-600 font-bold'>Please Login</div>
    }
    return <div className='flex justify-center items-center flex-col gap-y-7'>
        <div className='text-2xl' >Welcome: {user.username}</div>
        <div className='text-2xl'> {user.password}</div>
    </div>
}

export default Profile