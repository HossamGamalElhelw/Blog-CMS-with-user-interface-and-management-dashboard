import React, { useContext } from 'react'
import { TokenContext } from './TokenContext'
import {  useNavigate } from 'react-router-dom'

function Navbar() {
  const {token,setToken} = useContext(TokenContext)
  const navigate = useNavigate()

  const handleLogout = () =>{
    setToken(null);
    localStorage.removeItem('token');
    navigate('/Login');
  } 
  return (
    <div className='navbar_container flex justify-between items-center border-b-1 px-8 py-4'>
        <div className="logo">
            <h3 className='text-secondary'>Blog</h3>
        </div>
        <div className="user_login_info flex items-center gap-4">
          <button className='cursor-pointer' onClick={()=> navigate('/Homepage')}>HomePage</button>
          {!token ? (
            <>
              <button className='cursor-pointer' onClick={()=> navigate('/Login')}>Login</button>
              <button className='cursor-pointer' onClick={()=> navigate('/Signup')}>Signup</button>
            </>
              )
            : ( 
            <>
              <button className='cursor-pointer' onClick={() => navigate('/Dashboard')}>Dashboard</button>
              <button className='cursor-pointer' onClick={()=> handleLogout()}>Logout</button>
              <p>hello,user</p>
            </>
          )}
        </div>
    </div>
  )
}

export default Navbar