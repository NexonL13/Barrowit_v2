import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="drawer drawer-mobile">
  <input id="sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex-1 flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <div className='h-screen p-10'>
    <Outlet />
    </div>
    <label htmlFor="sidebar" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-64 bg-gray-200 text-base-content border border-r-gray-300">
      {/* <!-- Sidebar content here --> */}
      <Link to="analytics">Dashboard</Link>
      <Link to="assets">Assets</Link>
      <Link to="calendar">Calendar</Link>
      <Link to="users">Users Account</Link>
    </ul>
  
  </div>
</div>
  )
}

export default Sidebar