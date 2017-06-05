import React from 'react';
import ReactDOM from 'react-dom';
import YASearch from 'youtube-api-search';

import SearchDeOuf from './components/searchBar';
import VideoFeed from './components/videoFeed';


// Used in case of needing some sort of testing.
//import Friend from './components/test';


const YOUTUBE_API_KEY= 'AIzaSyAyBpBebHDM8BbJLN5Sn6flZ0t9Hj8XvTw';



class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {videos: []};

  	var that=this;
  	YASearch({"key": YOUTUBE_API_KEY, "term":"Kygo"}, function(response) {
  		console.log(response);
  		that.setState({videos: response});
  	});

  }
  render() {
  	return (
  		<div>
      		<SearchDeOuf />
      		<VideoFeed videos={this.state.videos}/>
    	</div>
    	);
  }
};

ReactDOM.render(<App />, document.getElementById('app'));