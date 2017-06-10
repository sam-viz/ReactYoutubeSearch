import React from 'react';

class SearchDeOuf extends React.Component {
	constructor(props){
		super(props);
		this.state = {searchKeyword: ''};
	}
	render () {
		return (			
			<div className="row ">
				<div className="card col l6 m6 s6 offset-l3 offset-s3 offset-m3">
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