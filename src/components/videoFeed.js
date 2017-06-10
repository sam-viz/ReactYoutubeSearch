import React from "react";
import ReactDOM from "react-dom";

import VideoThumbnail from './videoThumbnail';

const VideoFeed= (props) => {
   var videoReceivedItems= props.videos.map( element => {
   	  return <VideoThumbnail onSelectedVideo={props.onSelectedVideo} video={element} key={element.etag}/>;
   });

   return (<ul id="listOfVideos" className="col s12 m12 l5">
   	{videoReceivedItems}
   	</ul>);

};

export default VideoFeed; 