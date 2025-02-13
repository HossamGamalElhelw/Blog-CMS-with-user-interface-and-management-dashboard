import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(title, author, creationDate, update, deleteBtn) {

    
  return { title, author, creationDate, update, deleteBtn };
}

const rows = [
  createData('Frozen yoghurt', 'hossam', 6.0, 24, 4.0),
  createData('Ice cream sandwich', 'ahmed', 9.0, 37, 4.3),
  createData('Eclair', 'ahmed', 16.0, 24, 6.0),
  createData('Cupcake', 'ahmed', 3.7, 67, 4.3),
  createData('Gingerbread', 'ahmed', 16.0, 49, 3.9),
];

export default function TablePosts() {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Author</TableCell>
                    <TableCell align="right">CreationDate</TableCell>
                    <TableCell align="right">Update</TableCell>
                    <TableCell align="right">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                    key={row.title}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.title}
                    </TableCell>
                    <TableCell align="right">{row.author}</TableCell>
                    <TableCell align="right">{row.creationDate}</TableCell>
                    <TableCell align="right">{row.update}</TableCell>
                    <TableCell align="right">{row.deleteBtn}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
    );
}
