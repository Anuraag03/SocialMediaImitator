import React from 'react';
import RepeatIcon from '@mui/icons-material/Repeat';
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
//import { useNavigate } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const TweetCard = () => {
    //const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        console.log("delete tweet");
        handleClose();
    };

    const handleEditTweet = () => {
        console.log("edit tweet");
        handleClose();
    };

    const handleOpenReplyModel = () => {
        console.log("open model");
    };

    const handleCreateRetweet = () => {
        console.log("handle create retweet");
    };
    const handleLikeTweet = ()=>{
        console.log("handle like tweet")
    }

    return (
        <div className='flex mx-auto mb-5  border-2 border-white p-5 rounded-lg justify-center'>
            <Avatar
                className='cursor-pointer'
                alt='username'
                src="/default-profile-picture1-768x768-modified.png"
            />
            <div className='w-full'>
                <div className='flex justify-between items-center'>
                    <div className='flex cursor-pointer items-center space-x-2'>
                        <span className='font-semibold'>Twitter Clone</span>
                        <span className='text-gray-600'>@clonetwitter . 2m</span>
                        <div>
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
                                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
                <div className='mt-2'>
                    <div className='cursor-pointer'>
                        <p className='mb-2 p-0 flex width={full}'>twitter clone - full stack project with spring boot and react</p>
                        <img className='w-[28rem] border-2 border-white-400 p-5 rounded-md' src="/default-profile-picture1-768x768-modified.png" alt="post" />
                    </div>
                    <div className='py-5 flex flex-wrap justify-between items-center'>
                        <div className='space-x-3 flex items-center text-gray-600'>
                            <ChatBubbleOutlineIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
                            <p>43</p>
                        </div>
                        <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon onClick={handleCreateRetweet} className='cursor-pointer' />
                                <p>54</p>
                        </div>
                        <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true? <FavoriteIcon onClick={handleLikeTweet} className='cursor-pointer' />:<FavoriteBorderIcon onClick={handleLikeTweet} className='cursor-pointer' />}
                                <p>54</p>
                        </div>
                        <div className='space-x-3 flex items-center text-gray-600'>
                            <BarChartIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
                            <p>430</p>
                        </div>
                        <div className='space-x-3 flex items-center text-gray-600'>
                            <FileUploadIcon className="cursor-pointer" onClick={handleOpenReplyModel} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
    );
};

export default TweetCard;
