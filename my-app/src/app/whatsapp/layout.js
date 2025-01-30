
import SideNavbar from '@/components/side-navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex'>
        <SideNavbar />
        {children}
    </div>
  )
}

export default Layout