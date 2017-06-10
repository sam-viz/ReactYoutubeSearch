import React from "react";
import ReactDOM from "react-dom";


const VideoThumbnail = (props) => {
    	return (
              <li onClick={() => {props.onSelectedVideo(props.video)}}>
                <div>
                  <div>
                  <a href="#">
                    <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                  </a>
                  </div>
                  <div>
                    <h5>{props.video.snippet.title}</h5>
                    <h6>{props.video.snippet.channelTitle} </h6>
                  </div>
                </div>
              </li>
    		);

};

export default VideoThumbnail;