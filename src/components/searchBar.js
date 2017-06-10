import React from 'react';

class SearchDeOuf extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchKeyword: ''};
	}
	render () {
		return (
			
			<div class="row">
				<input  onChange={this.onInputChange.bind(this)} type="text"  placeholder="Search" />			
				<button className="btn waves-effect waves-light" onClick={(evt)=> { this.props.onButtonClicked(this.state.searchKeyword); }}>Submit</button>			
			</div>
		);
	}

	onInputChange(evt){
		this.setState({searchKeyword: evt.target.value});
	}
}

export default SearchDeOuf;