import React from 'react';

class PropDemo extends React.Component {
   // render() {
   //    return(<h4>{this.props.name}</h4>);
   // }
   render(){
      return(
         <h1>{this.props.title}</h1>
      )
   }
}
// 下面是标记属性的方式,这样写才能起作用
PropDemo.propTypes={
   title:React.PropTypes.string.isRequired
}
export default PropDemo;