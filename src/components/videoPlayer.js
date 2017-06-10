import React from "react";
import ReactDOM from "react-dom";

const VideoPlayer = ({video}) => {


	if (!video) {		
		return <div>Loading video ...</div>;
	}

	else {
		var id=video.id.videoId;
		var url= "https://www.youtube.com/embed/"+id;
		return (
			<div >
				<div>
	  				<iframe src={url}></iframe>
				</div>
				<div >
	           		<h3>{video.snippet.title}</h3>
	           		<p>{video.snippet.description}</p>
		      	</div>
      		</div>
			);
	}

};

export default VideoPlayer;
