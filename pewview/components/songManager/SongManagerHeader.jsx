import React from 'react';
import BackButton from '../utils/BackButton.jsx';

export default class SongManagerHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-2"><BackButton backToMainMenu={this.props.backToMainMenu}/></div>
        <div className="col-8"><h1 className="song-manager-title">{this.props.headerTitle}</h1></div>
        <div className="col-2"></div>
      </div>
    );
  }
}
