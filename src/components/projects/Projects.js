import React from 'react'
import { Outlet } from 'react-router-dom';
function Projects() {
  return (
    <>
      <div className='text-center'>Projects</div>
      <Outlet/>
    </>
  )
}

export default Projects