import React from 'react'

function Signup() {

    return (
        <div className="login_container flex flex-col gap-2 justify-center items-center h-screen">
        <div className="login p-10 w-100 h-120 border border-gray-300 rounded-lg shadow-md bg-white">
            <h2 className="text-center text-2xl font-semibold">SignUp</h2>
            <form  className="flex flex-col gap-4">
                <label className="flex flex-col gap-2">
                    Username
                    <input
                        placeholder="Enter Your User Name"
                        type="text"
                        className="border border-gray-300 px-3 py-2 rounded-md text-black outline-none focus:border-gray-500"
                    />
                </label>
                <label className="flex flex-col gap-2">
                    Email
                    <input
                        placeholder="Enter Your Email Name"
                        type="text"
                        className="border border-gray-300 px-3 py-2 rounded-md text-black outline-none focus:border-gray-500"
                    />
                </label>
                <label className="flex flex-col gap-1">
                    Password
                    <input
                        placeholder="Enter Your Password"
                        type="password"
                        className="border border-gray-300 px-3 py-2 rounded-md outline-none focus:border-gray-500"
                    />
                </label>
                <button
                    type="submit"
                    className="border bg-black text-white rounded-md p-2 mt-2 text-center w-full  cursor-pointer">
                    Sign Up
                </button>
            </form>
        </div>
    </div>
    );
    }

export default Signup