window.$ = window.jQuery = require("jquery");
window.Tether = require('tether');
require('bootstrap');
require('./scss/index.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import PresentationBuilder from './components/PresentationBuilder.jsx';

ReactDOM.render(<PresentationBuilder />, document.getElementById('root'));
