import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { useNavigate } from 'react-router-dom';
function HomePage() {
    // const NUMBER_POSTS = 10;
    const navigate = useNavigate();

    const [posts, setPosts] = useState([]);
    const handleFetchPosts = async () => {
        try {
            const response = await axios.get('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/posts');
            setPosts(response.data.data.posts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    useEffect(() => {
        handleFetchPosts();
    },[])

    const handleOpenPost = (id) =>{
        navigate('/PostDetails',{state:{id}});  
    }

    return (
    <div className='homePage_container px-8 max-sm:px-4'>
        <div className="posts grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
            {posts.map(post => {
                return(
                        <div onClick={()=>handleOpenPost(post.id)} className="post_content" key={post.id}>
                        <h1>{console.log("Cover Image URL:", post.cover)}</h1>
                        <picture className="post_picture">
                            <img className="post_img" src={`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/uploads/posts/${post.cover}`} alt="" />
                        </picture>
                        <div className="post_info flex justify-between">
                            <p>{post.author.username}</p>
                            <p>{post.categories[0]?.category?.name || 'undefined'}</p>
                        </div>
                        <h4>{post.title}</h4>
                        <p>{post.content}</p>
                    </div>
                )
            })}

        </div>
        <div className="btns_pagination flex justify-center items-center gap-4 my-8">
            <button className='previous_btn border-none rounded-md px-4 py-2 bg-black cursor-pointer'>Previous</button>
            <p className='page_pagination'>Page : </p>
            <button className='next_btn border-none rounded-md px-4 py-2 bg-black cursor-pointer'>Next</button>
        </div>
    </div>
    )
}

export default HomePage