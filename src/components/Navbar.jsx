import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar_container'>
        <div className="logo">
            <h3>Blog</h3>
        </div>
        <div className="user_login_info">
            <a href="#">Login</a>
            <a href="#">Singup</a>
            <p>hello,user</p>
        </div>
    </div>
  )
}

export default Navbar