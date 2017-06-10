import React from "react";
import ReactDOM from "react-dom";

import VideoThumbnail from './videoThumbnail';

const VideoFeed= (props) => {
   var videoReceivedItems= props.videos.map( element => {
   	  return <VideoThumbnail onSelectedVideo={props.onSelectedVideo} video={element} key={element.etag}/>;
   });

   return (<ul>
   	{videoReceivedItems}
   	</ul>);

};

export default VideoFeed; 