import React from "react";
import ReactDOM from "react-dom";

import VideoThumbnail from './videoThumbnail';

const VideoFeed= (props) => {
   var videoReceivedItems= props.videos.map( (element,index) => {
   	  return <VideoThumbnail onSelectedVideo={props.onSelectedVideo} video={element} key={element.etag}/>;
   });

   return (
   <div className="col s12 m12 l5"> 
   		<ul id="videoList" className="collection with-header z-depth-2">
   		    <li id="videoListTitle" className="collection-header"><h5>Video List</h5></li>
   			{videoReceivedItems}
   		</ul>
    </div>
   	);

};

export default VideoFeed; 