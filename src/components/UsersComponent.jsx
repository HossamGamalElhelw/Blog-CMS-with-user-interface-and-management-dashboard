import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpdateRoleDemo from './UpdateRole';
import axios from 'axios';
import { TokenContext } from './TokenContext';


export default function UsersComponent() {
    const [users, setUsers] = useState([]);
    const { token } = useContext(TokenContext);  

    const fetchUsersData = async () => {
        if(token){
            try {
                const request = await axios.get('http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/users',{
                headers: {
                    'Authorization' : `Bearer ${token}`
                }
                })
                setUsers(request.data.data);
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
                    <TableCell align="right">Update Role</TableCell>
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
                    <TableCell align="right">
                        <UpdateRoleDemo value={user} />
                    </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}
