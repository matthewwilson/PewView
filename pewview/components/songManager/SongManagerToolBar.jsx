import React from 'react';

export default class SongManagerToolBar extends React.Component {
  render() {
    return (
      <div className="row song-manager-toolbar-row">
        <div className="offset-md-3 col-md-6">
          <form className="form-inline">
            <input type="text" className="form-control song-manager-toolbar-search-input" id="song-manager-search-input" placeholder="Search"/>
          </form>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-outline-primary btn-block pewview-button" onClick={this.props.newSongButtonClicked}>
            NEW SONG
          </button>
        </div>
      </div>
    );
  }
}
