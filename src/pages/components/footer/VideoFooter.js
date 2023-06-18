import React from 'react'
import './VideoFooter.css'
import vinyl from '../../../assets/vinyl.png'
import musicNote from '../../../assets/music.png'


function VideoFooter() {
  return (
    <div className='video-footer'>
      <div className='video-footer-description'>
        <h4>@WhinderssonNunes</h4>
        <p>Onde eu pego meu Green Card de carioca?????🤪🤪🤪 Sou cria ou não tropa 🥺🥺🥺🥺
        </p>

        <div className='video-footer-music'>
          <span><img src={musicNote} alt="icone de nota musical"/></span>
          <div className='video-footer-music-name'>
            <p>Dennis e Kevin O Chris - TÁ OK</p>
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