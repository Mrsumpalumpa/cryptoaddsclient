import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import {Outlet} from 'react-router-dom'



const MasterLayout = () => {
  return (
    <div className='sb-nav-fixed'>
        <Navbar></Navbar>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <Sidebar></Sidebar>
            </div>
            <div id="layoutSidenav_content">
                <main>
                    
                  <Outlet></Outlet>  
                    
                </main>
                <Footer></Footer>
            </div>
        </div>
    </div>
   
  )
}

export default MasterLayout
