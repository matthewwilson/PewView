import React from 'react';

export default class BackButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-primary btn-sm pewview-button pewview-back-button"
        onClick={this.props.backToMainMenu}>

        BACK

      </button>
    );
  }
}
