import React from "react";
import ReactDOM from "react-dom";


const VideoThumbnail = (props) => {
    	return (
              <li className="collection-item video-item-container" onClick={() => {props.onSelectedVideo(props.video)}}>
                <div className="row video-item">
                  <div className="col s5 m5 l5 ">                  
                    <img className="responsive-img" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                  </div>
                  <div className="col s7 m7 l7">
                    <h6 className="video-title">{props.video.snippet.title}</h6>
                    <p>{props.video.snippet.channelTitle} </p>
                    
                  </div>
                </div>
               
              </li>
    		);

};

export default VideoThumbnail;