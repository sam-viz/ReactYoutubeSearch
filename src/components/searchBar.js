import React from 'react';

class SearchDeOuf extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchKeyword: ''};
	}
	render () {
		return (
			
			<div className="row">
				<input  onChange={this.onInputChange.bind(this)} type="text" className="col-md-9 col-lg-6 col-lg-offset-2" placeholder="Search" />			
				<button onClick={(evt)=> { this.props.onButtonClicked(this.state.searchKeyword); }} className="col-md-2 col-lg-2">Submit</button>			
			</div>
		);
	}

	onInputChange(evt){
		this.setState({searchKeyword: evt.target.value});
	}
}

export default SearchDeOuf;