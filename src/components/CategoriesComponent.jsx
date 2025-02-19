import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { TokenContext } from './TokenContext';
import { useNavigate } from 'react-router-dom';

export default function CategoriesComponent() {
    const [categories, setCategories] = useState([]);
    const { token } = useContext(TokenContext);  
    const navigate = useNavigate();

    const fetchCategoriesData = async () => {
        try {
            const request = await axios.get('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/categories')
            setCategories(request.data.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() =>{
        fetchCategoriesData();
    },[])
    useEffect(() => {
        if(categories){
        console.log(categories);
        }
    },[categories])
    
    const deleteCategories = async (id) =>{
        try {
            const response = await axios.delete(`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/categories/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    } 
    const updateCategories = async (category) => {
        navigate("/CreateCatogray",{state:{category}});
    }
  return (
    <div className="categories_container">
      <div className="Add_Post text-right m-2">
            <button onClick={()=>navigate('/CreateCatogray')} className='bg-gray-500 p-2 rounded-sm w-50 cursor-pointer'>Add Category</button>
        </div>
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Category name</TableCell>
                    <TableCell align="right">Category slug</TableCell>
                    <TableCell align="right">Creation date</TableCell>
                    <TableCell align="right">Update date</TableCell>
                    <TableCell align="right">Update</TableCell>
                    <TableCell align="right">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {categories.map((category) => (
                <TableRow
                    key={category.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {category.id}
                    </TableCell>
                    <TableCell align="right">{category.name}</TableCell>
                    <TableCell align="right">{category.slug}</TableCell>
                    <TableCell align="right">{category.createdAt}</TableCell>
                    <TableCell align="right">{category.updatedAt}</TableCell>
                    <TableCell align="right"><button onClick={() => updateCategories(category)} className='p-2 bg-gray-200 rounded-sm cursor-pointer'>Update</button></TableCell>
                    <TableCell align="right"><button onClick={() => deleteCategories(category.id)} className='p-2 bg-gray-200 rounded-sm cursor-pointer'>Delete</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    </div>
    );
}
