import * as React from 'react';
import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import axios from 'axios';
import { TokenContext } from './TokenContext';

const users = ['ADMIN', 'USER'];

function UpdateRole(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Choose Role</DialogTitle>
        <List sx={{ pt: 0 }} >
            {users.map((user) => (
            <ListItem disablePadding key={user}>
                <ListItemButton onClick={() => handleListItemClick(user)}>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user} />
                </ListItemButton>
            </ListItem>
            ))}
            <ListItem disablePadding>
                <div className='w-full flex justify-center items-center'>
                    <button onClick={() => onClose()} className='p-2 bg-gray-400 rounded-sm cursor-pointer'>Close</button>
                </div>
            </ListItem>
        </List>
        </Dialog>
    );
    }

UpdateRole.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function UpdateRoleDemo(user) {
    const [open, setOpen] = React.useState(false);
    const { token } = useContext(TokenContext);  
    const [role,setRole] = useState(user.value.role);

    const EditRole = async(value) =>{
        
        if(token){
            try {
                await axios.put(`http://ec2-3-76-10-130.eu-central-1.compute.amazonaws.com:4000/api/v1/users/role/${user.value.id}`,
                    {"name": value},
                    {
                        headers: {
                            'Authorization' : `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                    }
                )                
            } catch (error) {
                console.error(error);
            }
            } else {
            console.error('No token found in localStorage');
            }
    }
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        if(value){
            EditRole(value);
            setRole(value)
        }
    };
    
    return (
    <div>
        <Typography  variant="subtitle1" component="div">
            {role}
        </Typography>
        <br />
        <Button variant="outlined" onClick={handleClickOpen}>
            Update Role
        </Button>
        <UpdateRole
            open={open}
            onClose={handleClose}
        />
        </div>
    );
}
