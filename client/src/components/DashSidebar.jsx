import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiArrowSmRight, HiUser} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom';

const DashSidebar = () => {

    const location = useLocation();
    const [tab, setTab] = useState('');
  
    useEffect(() => {
      const urlParams = new URLSearchParams(location.search);
      const tabFromUrl = urlParams.get('tab')
      if(tabFromUrl){
        setTab(tabFromUrl);
      }
    }, [location.search]);
  return (
    <Sidebar className='w-full md:w-56 bg-amber-50 !important'>
        <Sidebar.Items>
            <Link to ='/dashboard?tab=profile'>
            <Sidebar.ItemGroup>
                <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={"User"} labelColor='dark' as='div'>Profile</Sidebar.Item>
                <Sidebar.Item active icon={HiArrowSmRight} className="cursor-pointer" as='div'>Log Out</Sidebar.Item>    
            </Sidebar.ItemGroup>
            </Link>
        </Sidebar.Items>
    </Sidebar>
  )
}

export default DashSidebar
