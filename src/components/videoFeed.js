import React from "react";
import ReactDOM from "react-dom";

import VideoThumbnail from './videoThumbnail';

const VideoFeed= (props) => {
   var videoReceivedItems= props.videos.map((element)=>{
   	  return <VideoThumbnail video={element} key={element.etag}/>;
   });

   return (<ul className="list-group">
   	{videoReceivedItems}
   	</ul>);

};

export default VideoFeed; 