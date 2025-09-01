import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'

function RootLayout() {
  return (
    <div className='flex justify-between'>
      {/* chap tomon navigatsiya paneli */}
      <Sidebar />
      <div className='w-full '>
          <Header/> 
          <SearchBar/>
          <main>
            <Outlet/>
          </main>
      </div>
    </div>
  )
}

export default RootLayout