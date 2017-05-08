import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import PropDemo from './props.jsx';
import StateDemo from './components/state.jsx';
import SetstateDemo from './components/setState.jsx';

ReactDOM.render(<App />, document.getElementById('app'));
var title = "OliveKong";
// var title=123;
ReactDOM.render(<PropDemo title={title}/>, document.getElementById('propdemo'));
ReactDOM.render(<StateDemo/>, document.getElementById("statedemo"));
ReactDOM.render(<SetstateDemo/>, document.getElementById("setstatedemo"));