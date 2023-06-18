import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';

function VideoSidebar({likes, comments, saves, shares}) {

    const [liked, setLiked] = useState(false)

    function handleLike(){
        setLiked(!liked)
    }

  return (
    <div className='video-sidebar'>
        <div 
            className='video-sidebar-option'
            onClick={handleLike}
        >
            { liked ? <FavoriteIcon fontSize="large" className='opt' sx={{ color: '#f54242' }}/> : <FavoriteBorderIcon fontSize="large" className='opt'/>}
            
            <span>{likes}</span>
        </div>
        <div className='video-sidebar-option'>
            <ModeCommentIcon fontSize="large" className='opt'/>
            <span>{comments}</span>
        </div>
        <div className='video-sidebar-option'>
            <BookmarkIcon fontSize="large" className='opt'/>
            <span>{saves}</span>
        </div>
        <div className='video-sidebar-option'>
            <ReplyIcon fontSize="large" className="share opt" />
            <span>{shares}</span>
        </div>
    </div>
  )
}

export default VideoSidebar