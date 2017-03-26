import React from 'react';
import MainMenuButton from './MainMenuButton.jsx';

export default class MainMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-menu-container">
        <h1>PewView</h1>
        <div className="main-menu-buttons-container">
          <MainMenuButton buttonText="SONG MANAGER" buttonTrigger={this.props.loadSongManager}/>
        </div>
      </div>
    );
  }
}
