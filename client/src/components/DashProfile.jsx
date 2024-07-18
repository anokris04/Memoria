import { Button, TextInput } from 'flowbite-react'
import React from 'react'
import { useSelector } from 'react-redux'

const DashProfile = () => {
    const {currentUser} = useSelector(state => state.user)

  return (
    <div className='max-w-lg mx-auto p-3 w-full' >
        <h1 className='my-7 text-center text-2xl font-bold'>Profile</h1>
        <form className='flex flex-col gap-4'>
            <div className='w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full'>
                <img src={currentUser.profilePicture} alt="user" className='rounded-full w-full h-full border-4 border-gray-300'/>
            </div>
            <TextInput className="mt-5" type='text' id='username' placeholder='Username' defaultValue={currentUser.username}/>
            <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email}/>
            <TextInput type='password' id='password' placeholder='Password'/>
            <Button type='submit' className='bg-purple-500'>Update</Button>
        </form>
        <div className='mt-1 flex justify-between mx-2'>
            <span className='text-red-600 font-semibold cursor-pointer'>Delete Account</span>
            <span className='font-semibold text-red-600 cursor-pointer'>Log Out</span>
        </div>
    </div>
  )
}

export default DashProfile
