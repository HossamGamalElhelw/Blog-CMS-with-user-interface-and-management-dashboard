import React, { useContext, useEffect, useState } from 'react'
import { TokenContext } from './TokenContext'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
  const {token,setToken} = useContext(TokenContext)
  const [username , setUsername] = useState('')
  const navigate = useNavigate()
  
  const handleLogout = () =>{
    setToken(null);
    localStorage.removeItem('token');
    navigate('/Login');
  } 
  const user = async() => {
    try {
      await axios.get('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/users/@me',
        { headers: {
          'Authorization' : `Bearer ${token}`}
        }
      )
      .then(response => setUsername(response.data.data.username))
    } catch (error) {
      console.log(error);
    } 
  }
  useEffect(() =>{
    user();
    },[token])
  
  return (
    <div className='navbar_container flex justify-between items-center border-b-1 px-8 py-4'>
        <div className="logo">
            <button className='text-secondary cursor-pointer'>Blog</button>
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
              <p>hello,{ username || 'user'}</p>
            </>
          )}
        </div>
    </div>
  )
}

export default Navbar