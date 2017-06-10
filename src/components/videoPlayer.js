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
			<div className="col-lg-6">
				<div className="embed-responsive embed-responsive-4by3">
	  				<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="caption">
	           		<h3>{video.snippet.title}</h3>
	           		<p>{video.snippet.description}</p>
		      	</div>
      		</div>
			);
	}

};

export default VideoPlayer;
