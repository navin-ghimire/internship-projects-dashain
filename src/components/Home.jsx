import React from 'react'
import Sidebar from './Sidebar.jsx'
import Video from './Video'
import { useAuth } from '../context/AuthProvider.jsx'

const Home = () => {
  const {data} = useAuth();
  console.log(data);
  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <Video />
      </div>
    </div>
  )
}

export default Home