// <script type="text/babel">
	var HelloMessage=React.createClass({
		render:function(){
			return(<h4>{this.props.name}</h4>);
		}
	});
	ReactDOM.render(
		<HelloMessage name="hello Olive"/>,
		document.getElementById("demo")
	);
	var HelloMessage2=React.createClass({
		getDefaultProps:function () {
			return{
				name:"Runoob"
			};
		},
		render:function(){
			return(<h3>hello {this.props.name}</h3>);
		}
	});
	ReactDOM.render(
		<HelloMessage2/>,
		document.getElementById("demo2")
	)
	var WebSite=React.createClass({
		getInitialState:function() {
			return{
				name:"OliveKong",
				site:"https://www.cnblogs.com/olive27"
			}
		},
		render:function() {
			return(
				<div>
					<Name name={this.state.name} />
					<Site site={this.state.site}/>
				</div>
			)
		}
	});
	var Name=React.createClass({
		render:function () {
			return(
				<h2>{this.props.name}</h2>
			)
		}
	});
	var Site=React.createClass({
		render:function () {
			return(
				<a href={this.props.site}>{this.props.site}</a>
			)
		}
	});
	ReactDOM.render(<WebSite/>, document.getElementById("demo3"));

	// var title="菜鸟教程";
	var title=124;
	var Title=React.createClass({
		propTypes:{
			title:React.PropTypes.string.isRequired,
		},
		render:function () {
			return(
				<h1>{this.props.title}</h1>
			)
		}
	});
	ReactDOM.render(<Title title={title}/>, document.getElementById("titleDemo"));
// </script>