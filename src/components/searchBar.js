import React from 'react';

class SearchDeOuf extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchKeyword: ''};
	}
	render () {
		return (
			<form className="navbar-form navbar-left" role="search">
				<div className="form-group">
					<input onChange={this.onInputChange.bind(this)} type="text" className="form-control" placeholder="Search" />
				</div>
				<button onClick={(evt)=> { this.props.onButtonClicked(this.state.searchKeyword); }} className="btn btn-default">Submit</button>
			</form>
		);
	}

	onInputChange(evt){
		this.setState({searchKeyword: evt.target.value});
	}
}

export default SearchDeOuf;