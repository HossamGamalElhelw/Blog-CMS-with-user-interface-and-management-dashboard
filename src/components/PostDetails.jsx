import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { TokenContext } from './TokenContext';

function PostDetails() {
    const {token} = useContext(TokenContext)
    const location = useLocation();
    const {id} = location.state || {};
    const [post, setPost] = useState();
    
    const fetchPost = async () =>{
        try {
            const response = await axios.get(`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/posts/${id}`);
            setPost(response.data.data)
        } catch (error) {
            console.error(error);      
            return      
        }
    }
    useEffect(()=>{
        fetchPost();
    },[])
    
    return (
        <div className='w-full flex flex-col items-center my-10'>
            {post && (
                <div className='flex flex-col gap-2'>
                    <h1 className='text-center mb-4 text-3xl'>{post?.title || 'No title available'}</h1>
                    <picture><img src= {`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/uploads/posts/${post.cover}`} alt="post_cover" /></picture>
                    <div className="flex justify-between">
                        <p>{post.author.username}</p>
                        <p>{post.tags}</p>
                    </div>
                    <p>{new Date(post?.createdAt).toLocaleDateString()}</p>
                    <p>{post.content}</p>
                </div>
            )}
            {token && (
                <div className="bg-gray-500 p-4 w-100 mt-10 rounded-sm">
                    <div className="flex justify-between bg-gray-400 my-4 p-2">
                        <p> this is comment</p>
                        <p>x</p>
                    </div>
                    <form>
                        <label>
                            <textarea className='bg-gray-200 w-full h-20 rounded-sm outline-none text-black p-2' type="text-area" />
                        </label>
                    </form>
                </div>
            )}
        </div>
    )
}

export default PostDetails