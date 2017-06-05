import React from "react";
import ReactDOM from "react-dom";


const VideoThumbnail = (props) => {
    	return (
              <li className="list-group-item" onClick={() => {props.onSelectedVideo(props.video)}}>
                <div className="media">
                  <div className="media-left">
                  <a href="#">
                    <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                  </a>
                  </div>
                  <div className="media-body">
                    <h4 className="media-heading">{props.video.snippet.title}</h4>
                    <h5>{props.video.snippet.channelTitle} </h5>
                  </div>
                </div>
              </li>
    		);

};

export default VideoThumbnail;