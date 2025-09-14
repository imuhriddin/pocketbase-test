
import { Link, NavLink, useNavigate } from 'react-router-dom'
import PocketBase from "pocketbase"
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const pb = new PocketBase("https://back.buyur.yurtal.tech")

function Sidebar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())       // Redux va localStorage tozalaydi
    pb.authStore.clear()     // PocketBase auth store ni tozalaydi
    navigate('/login')       // Login sahifasiga yo'naltiradi
  }
  return (
    <div className=''>
      <div className="w-64 bg-white h-screen shadow-md">
        <Link to={'/'} className="p-4 flex items-center justify-center border-b">
          <img src="https://via.placeholder.com/32" alt="Logo" className="mr-2" />
          <span className="text-xl font-bold text-gray-800">PB</span>
        </Link>
        <div className="p-4">
          <input type="text" placeholder="Search collections..." className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <nav className="mt-4">
          <NavLink to={'/'} className="flex items-center p-3 text-gray-700 hover:bg-gray-200 active:bg-gray-200 active:text-blue-600 rounded-md mx-2">
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span className="font-medium">users</span>
          </NavLink>
          <div className="mt-2 ml-4">
            <NavLink to={'buttons'} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Buttons</span>
            </NavLink>
            <NavLink to={'car-models'} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Car Models</span>
            </NavLink>
            <NavLink to={'cars'} href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Cars</span>
            </NavLink>
            <NavLink to={'cities'} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Cities</span>
            </NavLink>
            <NavLink to={'loads'} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Loads</span>
            </NavLink>
            <NavLink to={'payment-methods'} href="#" className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Payment Methods</span>
            </NavLink>
            <NavLink to={'rules'} className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
              <span>Rules</span>
            </NavLink>
          </div>

          <div className="mt-6 mx-2">
            <button className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded-md w-full text-left">
              <span className="font-medium">System</span>
              <svg className="w-4 h-4 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

          </div>
        </nav>
        <div className="w-32 p-4 border-t">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-1 bg-red-400 text-white rounded-md hover:bg-red-600 justify-center"
        >
          Logout
        </button>
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar