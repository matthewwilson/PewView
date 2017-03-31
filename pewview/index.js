window.$ = window.jQuery = require("jquery");
window.Tether = require('tether');
require('bootstrap');
require('./scss/index.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import PewView from './components/PewView.jsx';

ReactDOM.render(<PewView />, document.getElementById('root'));
