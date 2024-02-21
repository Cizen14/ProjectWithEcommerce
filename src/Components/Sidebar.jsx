import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const { userInfo} = useSelector(state => state.auth);
  return (
    <div style={{position:'fixed', background:'linear-gradient( to right, #93A5CF, #E2D1C3)', top:'9%', height: '100%'}} >
        <div className='mt-4 p-2 text-center'> Welcome {userInfo.fName} ! ({userInfo.role}) <br></br> 👋! </div>
        <hr />
        <ul className='list-unstyled ps-2 d-flex flex-column gap-2' >
        

        
            <li><Link to={"/"} className="nav-link">Dashboard</Link></li>
            <li><Link to={"/products"} className="nav-link">Product</Link></li>
            <li><Link to={"/signup"} className="nav-link">CreateUser</Link></li>
          
       
        </ul>

    </div>
  )
}

export default Sidebar
