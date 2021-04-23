import React from 'react';
import './video.css';

const VideoItem = ({video , handleVideoSelect}) => {
  
    return (
        
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.high.url} alt={video.snippet.description}/>
            <div className='content'>
            
                <div className='title'>{video.snippet.title}</div>
                <div className='live' >Livestream: {video.snippet.liveBroadcastContent}</div>
            </div>
        </div>
        
    )


};
export default VideoItem;