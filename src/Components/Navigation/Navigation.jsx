import * as React from 'react';
import { navigationMenu } from './NavigationMenu';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Navigation = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () =>{
        handleClose();
        console.log("logout");
    }

    return (
        <div className='h-screen sticky top-0'>
            <div>
                <div className='py-5'>
                    <img src="/logo__converted_-06_4x.png" alt="Logo" width={50} height={20} viewBox="0 0 24 24" />
                </div>
                <div className='space-y-6'>
                    {navigationMenu.map((item, index) => (
                        <div
                            key={index}
                            className='cursor-pointer flex space-x-3 items-center'
                            onClick={() =>
                                item.title === "Profile"
                                    ? navigate(`/profile/${5}`)
                                    : navigate(item.path)
                            }
                        >
                            {item.icon}
                            <p className='text-xl'>{item.title}</p>
                        </div>
                    ))}
                </div>
                <div className='py-5'>
                    <Button 
                    sx={{width:"100%",borderRadius:"29px",py:"15px",bgcolor:"#1e88e5"}} variant='contained'>
                        Tweet
                    </Button>
                </div>
            </div>
            <div className='flex items-center justify-between py-5'>
                <div className='flex items-center space-x-3'>
                    <Avatar alt="username" src="/default-profile-picture1-768x768-modified.png"/>
                </div>
                <div className='flex flex-col'>
                    <span>Twitter Clone</span>
                    <span className='opacity-70'>@clonetwitter</span>
                </div>
                
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                > 
                    <MoreHorizIcon />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
};

export default Navigation;
