import React from 'react';
const {ipcRenderer} = require('electron');

export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    ipcRenderer.on('next-slide-reply', (event, arg) => {
      console.log(arg);
    });
  }

  handleClick() {
    ipcRenderer.send('next-slide', 'go to next slide');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
         Next Slide
      </button>
    )
  }
}
