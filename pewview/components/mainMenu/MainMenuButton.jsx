import React from 'react';

export default class MainMenuButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-primary btn-lg btn-block pewview-button"
        onClick={this.props.buttonTrigger}>

        {this.props.buttonText}

      </button>
    );
  }
}
