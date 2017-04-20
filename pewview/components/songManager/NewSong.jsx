import React from 'react';

export default class NewSong extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      song:[]
    };

    this.newVerse = this.newVerse.bind(this);
  }

  newVerse() {
    var verse = {
      "type":"verse"
    };

    this.setState((prevState) => ({
      song: prevState.song.concat(verse)
    }));
  }



  render() {
    return (
      <div>
        <div>
          {this.state.song.map(verse => (
            <div className="form-group">
              <textarea className="form-control" rows="10"></textarea>
            </div>
          ))}
        </div>
        <div className="row justify-content-md-center">
          <div className="col-3">
            <button type="button" className="btn btn-outline-primary btn-block pewview-button" onClick={this.newVerse}>
              NEW VERSE
            </button>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <button type="button" className="btn btn-outline-primary btn-block pewview-button">
              NEW CHORUS
            </button>
          </div>
        </div>
      </div>

    );
  }

}
