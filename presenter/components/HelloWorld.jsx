import React from 'react';

export default class HelloWorld extends React.Component {

  handleClick() {
    console.log("Hello World");
  }

  render() {
    return (
      <button onClick={this.handleClick}>
         Click Me
      </button>
    )
  }
}
