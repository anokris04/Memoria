import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/DashSidebar';
import DashProfile from '../components/DashProfile';
import DashPosts from '../components/DashPosts';
import DashComments from '../components/DashComments';
const Dashboard = () => {

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
    <div className='min-h-screen flex flex-col md:flex-row'>
      <div className="bg-amber-50 md:w-56">
        <DashSidebar/>
      </div>
      {tab === 'profile' && <DashProfile/>}
      {tab === 'posts' && <DashPosts/>}
      {tab === 'comments' && <DashComments/>}
    </div>
  )
}

export default Dashboard;