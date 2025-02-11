import React from 'react'

function Navbar() {
  return (
    <div className='navbar_container flex justify-between items-center border-b-1 px-8 py-4'>
        <div className="logo">
            <h3 className='text-secondary'>Blog</h3>
        </div>
        <div className="user_login_info flex items-center gap-4">
            <a href="#">Login</a>
            <a href="#">Singup</a>
            <p>hello,user</p>
        </div>
    </div>
  )
}

export default Navbar