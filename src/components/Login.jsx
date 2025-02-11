import React, { useState } from 'react';
import './Login.css';


async function LoginUser(credentials) {
        try{
            const response = await fetch('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/auth/signing',{
                method: 'POST',
                headers:{
                    'Content-Type' :'application/json'
                },
                body: JSON.stringify(credentials)
            })
            if(!response.ok){
                console.error('invalid username or password');
            }
            return await response.json();
        }catch(error){
            console.error('login error',error);
            return null;            
        }
}

function Login({setToken}) {
    const [userNameValue , setUserNameValue] = useState('');
    const [passwordValue , setPasswordValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!userNameValue || !passwordValue){
            alert('Enter Password and username please!');
            return;
        }
        try{
            const token = await LoginUser({
                username: userNameValue,
                password: passwordValue
            })
            if(token){
                setToken(token);
                alert('successful login')
            }else{
                alert('invalid user');
            }
        }catch(error){
            console.error('error is',error);
        }
    };

    return (
        <div className="login_container flex flex-col gap-2 justify-center items-center h-screen">
            <div className="login p-10 w-100 h-90 border border-gray-300 rounded-lg shadow-md bg-white">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label className="flex flex-col gap-2">
                        Username
                        <input
                            onChange={(e)=>setUserNameValue(e.target.value)}
                            placeholder="Enter Your User Name"
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md text-black outline-none focus:border-gray-500"
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        Password
                        <input
                            onChange={(e)=>setPasswordValue(e.target.value)}
                            placeholder="Enter Your Password"
                            type="password"
                            className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-gray-500"
                        />
                    </label>
                    <button
                        type="submit"
                        className="border bg-black text-white rounded-md p-2 mt-2 text-center w-full cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
