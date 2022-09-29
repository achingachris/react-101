import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../navbar/Sidebar';
function Projects() {
  return (
    <>
      <div className='d-inline-block flex-column'>
        <div className='text-cente mx-auto'>Projects</div>
        <Outlet/>
      </div>
      <Sidebar/>
    </>
  )
}

export default Projects