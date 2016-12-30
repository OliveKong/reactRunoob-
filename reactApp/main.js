import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import PropDemo from './props.jsx';
ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<PropDemo name="OliveKong"/>, document.getElementById('propdemo'))