import Link from 'next/link'
import React from 'react'

const SideNavbar = () => {
    const navItems =["chats", "status", "channel", "communities"]
  return (
    
    <div>
        <div className='w-44 h-screen bg-[#fafdff] flex justify-center border-red-100 border-2 items-start'>
            <div>
            {navItems.map((item) => {
                return (
                    <div className='w-full text-2xl p-4'>
                        <Link href={"/whatsapp/"+item}>{item}</Link>
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}

export default SideNavbar