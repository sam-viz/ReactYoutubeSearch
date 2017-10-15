import React from 'react';

const searchBarStyle= {
	root : {
		"padding-left": 10,
		"padding-right" : 10
	}
}

class SearchDeOuf extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchKeyword: ''};
	}
	render () {
		return (			
			<div className="row" style={searchBarStyle.root}>
				<div className="card col l6 m12 s12 offset-l3">
					<div className="card-content">
						<input value={this.state.searchKeyword} onChange={this.handleInputChange.bind(this)} type="text"  placeholder="Search" />					
					</div>
				</div>
			</div>
		);
	}

	handleInputChange(evt){
		this.setState({searchKeyword: evt.target.value});
		this.props.onButtonClicked(this.state.searchKeyword);
	}
}

export default SearchDeOuf;