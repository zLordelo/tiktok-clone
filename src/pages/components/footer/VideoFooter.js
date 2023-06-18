import React from 'react'
import './VideoFooter.css'
import vinyl from '../../../assets/vinyl.png'
import musicNote from '../../../assets/music.png'


function VideoFooter({user, description, musicName}) {
  return (
    <div className='video-footer'>
      <div className='video-footer-description'>
        <h4>{user}</h4>
        <p>{description}</p>

        <div className='video-footer-music'>
          <span><img src={musicNote} alt="icone de nota musical"/></span>
          <div className='video-footer-music-name'>
            <p>{musicName}</p>
          </div>
          
        </div>
      </div>

      <img
        className='video-footer-vinyl' 
        src={vinyl}
        alt='Imagem de um vinil girando'
      />

    </div>
  )
}

export default VideoFooter