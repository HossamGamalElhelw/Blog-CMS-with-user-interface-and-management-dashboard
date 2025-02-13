import * as React from 'react';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect } from 'react';

export default function UsersComponent() {
  const [users, setUsers] = useState([]);
  const fetchUsersData = async () => {
    const token = localStorage.getItem('token');
    if(token){
      try {
        await axios.get('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/users',{
          headers: {
            'Authorization' : `Bearer ${token}`
          }
        })
        .then(req => setUsers(req.data.data));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No token found in localStorage');
    }
  }
  
  useEffect(() =>{
    fetchUsersData();
  },[])
  useEffect(() => {
    if(users){
      console.log(users);
    }
  },[users])

  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">username</TableCell>
                    <TableCell align="right">email</TableCell>
                    <TableCell align="right">Update</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {users.map((user) => (
                <TableRow
                    key={user.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {user.id}
                    </TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="right"><button className='p-2 bg-black text-white cursor-pointer'>Update</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}
