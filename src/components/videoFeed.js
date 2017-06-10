import React from "react";
import ReactDOM from "react-dom";

import VideoThumbnail from './videoThumbnail';

const VideoFeed= (props) => {
   var videoReceivedItems= props.videos.map( (element,index) => {
   	  return <VideoThumbnail onSelectedVideo={props.onSelectedVideo} isLastElement={index===props.videos.length-1 ? true:false} video={element} key={element.etag}/>;
   });

   return ( <div id="listOfVideos" className="col s12 m12 l5 z-depth-3">
   	<h5>Video list</h5>
   	<div className="divider"></div>
   	<ul>
   	{videoReceivedItems}
   	</ul>
   	</div>
   	);

};

export default VideoFeed; 