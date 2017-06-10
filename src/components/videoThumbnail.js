import React from "react";
import ReactDOM from "react-dom";

var h6YoutubeStyle={
   fontWeight: 500
};
const VideoThumbnail = (props) => {
    	return (
              <li className="row" onClick={() => {props.onSelectedVideo(props.video)}}>
                <div className="valign-wrapper">
                  <div className="col s5 m5 l5 ">                  
                    <img className="responsive-img" src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                  </div>
                  <div className="col s7 m7 l7">
                    <h6 style={h6YoutubeStyle}>{props.video.snippet.title}</h6>
                    <p>{props.video.snippet.channelTitle} </p>
                  </div>

                </div>
                <div className="divider col s12 m12 l12"></div>
              </li>
    		);

};

export default VideoThumbnail;