import React from 'react';
import MainMenu from './mainMenu/MainMenu.jsx';
import SongManager from './songManager/SongManager.jsx';

export default class PresentationBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      onMainMenu: true
    };
    this.loadSongManager = this.loadSongManager.bind(this)
  }

  loadSongManager(event) {
    this.setState({
      onMainMenu: false,
      onSongManager: true
    });
  }

  render() {
    if(this.state.onMainMenu) {
      return (
        <MainMenu loadSongManager={this.loadSongManager}/>
      );
    } else if(this.state.onSongManager) {
      return (
        <SongManager />
      );
    }
  }
}
