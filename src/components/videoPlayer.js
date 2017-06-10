import React from "react";
import ReactDOM from "react-dom";

const VideoPlayer = ({video}) => {


	if (!video) {		
		return(
		  <div class="preloader-wrapper big active">
		    <div class="spinner-layer spinner-blue-only">
		      <div class="circle-clipper left">
		        <div class="circle"></div>
		      </div><div class="gap-patch">
		        <div class="circle"></div>
		      </div><div class="circle-clipper right">
		        <div class="circle"></div>
		      </div>
		    </div>
		  </div>
	  );
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
