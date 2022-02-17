import React from 'react'
import Navbar from './NavbarFront'
import Sidebar from './SidebarFront'
import Footer from './FooterFront'
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import {Outlet} from 'react-router-dom'



const MasterLayoutFront = () => {
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

export default MasterLayoutFront
