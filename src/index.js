import React from 'react';
import ReactDOM from 'react-dom';
import YASearch from 'youtube-api-search';
import _ from 'lodash';

import SearchDeOuf from './components/searchBar';
import VideoFeed from './components/videoFeed';
import VideoPlayer from './components/videoPlayer';
import Header from './components/header';


const YOUTUBE_API_KEY= 'AIzaSyAyBpBebHDM8BbJLN5Sn6flZ0t9Hj8XvTw';



class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {videos: [] , selectedVideo : null };
  	this.handleKeywordPressed("kygo");

  }
  render() {
    const debouncedKeywordPressed=_.debounce((kw) => {this.handleKeywordPressed(kw)},200);
  	return (
  		<div className="container">
          <Header />
      		<SearchDeOuf onButtonClicked={debouncedKeywordPressed}/>
          <div className="row">
          <VideoPlayer video= {this.state.selectedVideo} />
      		<VideoFeed videos={this.state.videos} onSelectedVideo={(video) => { this.setState({selectedVideo: video}); }} />
          </div>
    	</div>
    	);
  }

  handleKeywordPressed(keyword){
    var that=this;
    YASearch({"key": YOUTUBE_API_KEY, "term":keyword}, function(response) {
      console.log(response);
      that.setState({videos: response});
    });
  }
};

ReactDOM.render(<App />, document.getElementById('app'));