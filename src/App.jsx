import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import PlayingVideo from './components/PlayingVideo'
import Search from './components/Search'
// import Sidebar from './components/Sidebar'
// import { useAuth } from './context/AuthProvider'


const App = () => {
  // const {loading, data} = useAuth();
  // console.log(loading);
  // console.log(data);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' exact element ={<Home />} />
        <Route path='/search/:searchQuery' element ={<Search />} />
        <Route path='/video/:id' element ={<PlayingVideo />} />
      </Routes>
    </div>
  )
}

export default App