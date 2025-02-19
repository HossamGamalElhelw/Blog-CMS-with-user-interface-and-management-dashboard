import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate } from 'react-router-dom';
import CreatePost from './CreatePost';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { TokenContext } from './TokenContext';


export default function TablePosts() {
    const {token} = useContext(TokenContext);
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
    
    const handleDeletePost = async(id) =>{
        try {
            const response = await axios.delete(`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/posts/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

    const handleUpdatePost = async(post) =>{
        navigate('/CreatePost',{state: {post}})
    }
    return (
    <div className="Posts_container">
        <div className="Add_Post text-right m-2">
            <button onClick={()=>navigate('/CreatePost')} className='bg-gray-500 p-2 rounded-sm w-50 cursor-pointer'>Add Post</button>
        </div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                        <TableCell align="right">CreationDate</TableCell>
                        <TableCell align="right">Update At</TableCell>
                        <TableCell align="right">Update</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {posts.map((post) => (
                    <TableRow
                        key={post.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {post.title}
                        </TableCell>
                        <TableCell align="right">{post.author.username}</TableCell>
                        <TableCell align="right">{post.createdAt}</TableCell>
                        <TableCell align="right">{post.updatedAt}</TableCell>
                        <TableCell align="right"><button onClick={()=>handleUpdatePost(post)} className='p-2 bg-gray-200 rounded-sm cursor-pointer'>Update</button></TableCell>
                        <TableCell align="right"><button onClick={()=>handleDeletePost(post.id)} className='p-2 bg-gray-200 rounded-sm cursor-pointer'>Delete</button></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>

    );
}
