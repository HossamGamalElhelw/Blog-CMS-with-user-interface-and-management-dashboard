import React, { useContext, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from './TokenContext';
import {  z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import axios from 'axios';


function Login() {
    const {setToken} = useContext(TokenContext)
    const navigate = useNavigate();

    const [loading ,setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false)

    const schema= z.object({
        userNameValue: z.string().min(4,"Username must be at least 4 characters"),
        passwordValue: z.string().min(5, "Password must be at least 5 characters ")
    }) 

    const {register, handleSubmit,formState:{errors},reset} = useForm({resolver: zodResolver(schema)});

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage('');
        setIsError(false);
        const newPost = {
            username: data.userNameValue,
            password: data.passwordValue
        }        
        try {
            const response = await axios.post('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/auth/signing', newPost)
                const token = response.data.data;
                setToken(token);
                navigate('/HomePage')
        } catch (error) {
            setMessage("Username or Password Invalid");
            setIsError(true);
        }finally{
            setLoading(false);
            reset();
        }
    }
    return (
        <div className="login_container flex flex-col gap-2 justify-center items-center h-screen">
            <div className="login p-10 w-100 h-100 border border-gray-300 rounded-lg shadow-md bg-white">
                <h2 className="text-center text-2xl font-semibold">Login</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <label className="flex flex-col gap-2">
                        Username
                        <input
                            {...register('userNameValue')}
                            placeholder="Enter Your User Name"
                            type="text"
                            className="border border-gray-300 px-3 py-2 rounded-md text-black outline-none focus:border-gray-500"
                        />
                        {errors.userNameValue && <p className='text-red-500'>{errors.userNameValue.message}</p>}
                    </label>
                    <label className="flex flex-col gap-1">
                        Password
                        <input
                            {...register('passwordValue')}
                            placeholder="Enter Your Password"
                            type="password"
                            className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-gray-500"
                        />
                        {errors.passwordValue && <p className='text-red-500'>{errors.passwordValue.message}</p> }
                    </label>
                    <button
                        type="submit"
                        className="border bg-black text-white rounded-md p-2 mt-2 text-center w-full cursor-pointer"
                    >
                        {loading ? "Login...." : "Login"}
                    </button>
                    {message && <p className={`text-center ${isError ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
                </form>
            </div>
        </div>
    );
}

export default Login;
