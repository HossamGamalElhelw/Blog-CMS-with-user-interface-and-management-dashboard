import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {  z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

function Signup() {
    const [message ,setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const schema = z.object({
        userNameValue: z.string().min(4,"Username must be at least 4 characters"),
        emailValue: z.string().min(1,"This field has to be filled").email("This is not a valid email").refine((value)=> value.endsWith("@gmail.com"),"Email must end @gmail.com"),
        passwordValue: z.string().min(5, "Password must be at least 5 characters ")
    })

    const {register , handleSubmit, formState:{errors},reset} =useForm({resolver: zodResolver(schema)});
    const onSubmit = async (data) => {
        const newUser = {
            username: data.userNameValue,
            email: data.emailValue,
            password: data.passwordValue
        };

        try {
            await axios.post("http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/auth/signup",newUser)
            .then(response => {
                console.log(data.response);
            })
            setMessage('Sign Up is successfully')
        } catch (error) {
            if(error.status === 400){
                setMessage('This Account is exist');
                setIsError(true);
            }else{
                console.log('error is ', error);
            }
        }finally{
            reset();
            setTimeout(() => {
                setMessage(' ');
                setIsError(false);
            }, 3000);
        }
    } 

    return (
        <div className="login_container flex flex-col gap-2 justify-center items-center h-screen">
        <div className="login p-10 w-100 h-120 border border-gray-300 rounded-lg shadow-md bg-white">
            <h2 className="text-center text-2xl font-semibold">SignUp</h2>
            <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col gap-4">
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
                <label className="flex flex-col gap-2">
                    Email
                    <input
                        {...register('emailValue')}
                        placeholder="Enter Your Email Name"
                        type="text"
                        className="border border-gray-300 px-3 py-2 rounded-md text-black outline-none focus:border-gray-500"
                    />
                    {errors.emailValue && <p className='text-red-500'>{errors.emailValue.message}</p>}
                </label>
                <label className="flex flex-col gap-1">
                    Password
                    <input
                        {...register('passwordValue')}
                        placeholder="Enter Your Password"
                        type="password"
                        className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-gray-500"
                    />
                    {errors.passwordValue && <p className='text-red-500'>{errors.passwordValue.message}</p>}
                </label>
                <button
                    type="submit"
                    className="border bg-black text-white rounded-md p-2 mt-2 text-center w-full  cursor-pointer">
                    Sign Up
                </button>
                {message && <p className = {`${isError ? 'text-red-500 ' : 'text-green-500'} text-center`}>{message}</p>}
            </form>
        </div>
    </div>
    );
    }

export default Signup