import React from 'react';

class SearchDeOuf extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchKeyword: ''};
	}
	render () {
		return (
			<div>
			<input type="text" className="form-control" value={this.state.searchKeyword} onChange={this.onInputChange.bind(this)}/>;
			</div>
			);
	}

	onInputChange(evt){
		this.setState({searchKeyword: evt.target.value});
	}
}

export default SearchDeOuf;