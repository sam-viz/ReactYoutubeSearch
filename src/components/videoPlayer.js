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
			<div className="col m12 s12 l7">
				<div className="video-container">
	  				<iframe src={url}></iframe>
				</div>
				<div className="card">
					<div className="card-content">
	           			<p><span className="card-title">{video.snippet.title}</span>
	           			{video.snippet.description}</p>
	           		</div>
		      	</div>
      		</div>
			);
	}

};

export default VideoPlayer;
