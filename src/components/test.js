var React = require('react');
var ReactDOM = require('react-dom');

var friends = [
  {
    title: "Yummmmmmm",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
  }
];
var green = '#39D1B4';
var yellow = '#FFD712';

// New component class starts here:
/*var Friend= React.createClass({
  getInitialState:function(){
    return {color: green};
  },
  changeColor:function(){
    var newColor= this.state.color === green ? yellow:green;
    this.setState({color:newColor});
  },
  render: function () {
    return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>click me for a change</button>
      </div>
    );
  }
});*/

class Friend extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: green};
		this.changeColor=this.changeColor.bind(this);
	}
	
	changeColor(){
    var newColor= this.state.color === green ? yellow:green;
    this.setState({color:newColor});
    }

	render () {
		return (
      <div style={{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>click me for a change</button>
      </div>
    );
	}
}

export default Friend;