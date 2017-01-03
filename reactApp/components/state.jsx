import React from 'react';

class StateDemo extends React.Component{
	constructor(){
		super();
		this.state = {
		    liked: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
	    this.setState({liked: !this.state.liked})
	}
	render(){
	    var text=this.state.liked?'喜欢':'不喜欢';
	    return(
	        <p onClick={this.handleClick}>
	            你<b>{text}</b>我。点我切换状态
	        </p>
	    );
	}
}

export default StateDemo;
