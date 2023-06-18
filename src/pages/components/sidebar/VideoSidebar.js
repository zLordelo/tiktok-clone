import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ReplyIcon from '@mui/icons-material/Reply';

function VideoSidebar() {

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
            
            <span>1.0M</span>
        </div>
        <div className='video-sidebar-option'>
            <ModeCommentIcon fontSize="large" className='opt'/>
            <span>14.0K</span>
        </div>
        <div className='video-sidebar-option'>
            <BookmarkIcon fontSize="large" className='opt'/>
            <span>22.2K</span>
        </div>
        <div className='video-sidebar-option'>
            <ReplyIcon fontSize="large" className="share opt" />
            <span>15.6K</span>
        </div>
    </div>
  )
}

export default VideoSidebar