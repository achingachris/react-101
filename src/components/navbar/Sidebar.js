import React from 'react'
import './Sidebar.css';
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <>
    <div className="d-inline-block flex-column vh-100 flex-shrink-0 p-3 text-white bg-dark w-250 float-start">
    <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
            <Link to='/projects' className="nav-link active" aria-current="page"> <i className="fa fa-home"></i><span className="ms-2">Projects</span> </Link>
        </li>
        <li>
            <Link to='f-projects' className="nav-link text-white"> <i className="fa fa-dashboard"></i><span className="ms-2">Freelance Projects</span> </Link>
        </li>
        <li>
            <Link to='o-projects' className="nav-link text-white"> <i className="fa fa-first-order"></i><span className="ms-2">OpenSource Projects</span> </Link>
        </li>
    </ul>
</div>

    </>
  )
}

export default Sidebar