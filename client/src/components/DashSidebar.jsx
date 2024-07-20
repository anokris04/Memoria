import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

const DashSidebar = () => {

    const location = useLocation();
    const [tab, setTab] = useState('');
    const dispatch = useDispatch();
  
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl);
      }
    }, [location.search]);

    const handleSignout = async () => {
      try {
        const res = await fetch('/api/user/signout', {
          method: 'POST',
        });
        const data = await res.json();
        if (!res.ok) {
          console.log(data.message);
        } else {
          dispatch(signoutSuccess());
        }
      } catch (error) {
        console.log(error.message);
      }
    };

  return (
    <Sidebar className='w-full md:w-56 bg-amber-50 !important'>
        <Sidebar.Items>
            <Link to ='/dashboard?tab=profile'>
            <Sidebar.ItemGroup>
                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={"User"} labelColor='dark' as='div'>Profile</Sidebar.Item>
                <Sidebar.Item active onClick={handleSignout} icon={HiArrowSmRight} className="cursor-pointer" as='div'>Log Out</Sidebar.Item>    
            </Sidebar.ItemGroup>
            </Link>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
