import React from 'react';
import ReactDOM from 'react-dom';
import YASearch from 'youtube-api-search';

import SearchDeOuf from './components/searchBar';
import VideoFeed from './components/videoFeed';
import VideoPlayer from './components/videoPlayer';


// Used in case of needing some sort of testing.
//import Friend from './components/test';


const YOUTUBE_API_KEY= 'AIzaSyAyBpBebHDM8BbJLN5Sn6flZ0t9Hj8XvTw';



class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {videos: [] , selectedVideo : null };

  	var that=this;
  	YASearch({"key": YOUTUBE_API_KEY, "term":"Kygo"}, function(response) {
  		console.log(response);
  		that.setState({videos: response, selectedVideo: response[0]});
  	});

  }
  render() {
  	return (
  		<div>
      		<SearchDeOuf onButtonClicked={this.handleKeywordPressed.bind(this)}/>
          <VideoPlayer video= {this.state.selectedVideo} />
      		<VideoFeed videos={this.state.videos} onSelectedVideo={(video) => { this.setState({selectedVideo: video}); }} />
    	</div>
    	);
  }

  handleKeywordPressed(keyword){
    console.log("Received keyword" );
    console.log(keyword);
    var that=this;
    YASearch({"key": YOUTUBE_API_KEY, "term":keyword}, function(response) {
      console.log(response);
      that.setState({videos: response, selectedVideo: response[0]});
    });
  }
};

ReactDOM.render(<App />, document.getElementById('app'));