import React from 'react';
import MainMenuButton from './MainMenuButton.jsx';

export default class MainMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-menu-container">
        <img src="./img/logo-white.png" className="img-fluid mx-auto d-block main-menu-logo" alt="PewView Logo"/>
        <div className="main-menu-buttons-container">
          <MainMenuButton buttonText="SONG MANAGER" buttonTrigger={this.props.loadSongManager}/>
        </div>
      </div>
    );
  }
}
