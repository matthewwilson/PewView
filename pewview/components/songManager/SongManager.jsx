import React from 'react';
import BackButton from '../utils/BackButton.jsx';
import SongManagerHeader from './SongManagerHeader.jsx';
import SongTable from './SongTable.jsx';
import SongManagerToolBar from './SongManagerToolBar.jsx';
import NewSong from './NewSong.jsx';

export default class SongManager extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      onSongManager: true
    };
    this.newSongButtonClicked = this.newSongButtonClicked.bind(this)
    this.backToSongManager = this.backToSongManager.bind(this)
  }

  newSongButtonClicked(event) {
    this.setState({
      onNewSong: true,
      onSongManager: false
    });
  }

  backToSongManager(event) {
    this.setState({
      onNewSong: false,
      onSongManager: true
    });
  }

  render() {

    if(this.state.onSongManager) {
      return (
        <div className="song-manager-container">
          <SongManagerHeader backToMainMenu={this.props.backToMainMenu} headerTitle="Song Manager"/>
          <SongManagerToolBar newSongButtonClicked={this.newSongButtonClicked}/>
          <SongTable/>
        </div>
      );
    } else if(this.state.onNewSong) {
      return (
        <div className="song-manager-container">
          <SongManagerHeader backToMainMenu={this.backToSongManager} headerTitle="New Song"/>
          <NewSong/>
        </div>
      );
    }


  }
}
