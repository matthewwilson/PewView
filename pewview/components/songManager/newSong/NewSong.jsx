import React from 'react';
import Verse from './Verse.jsx';
const uuidV4 = require('uuid/v4');

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
      "type":"verse",
      "key":uuidV4()
    };

    this.setState((prevState) => ({
      song: prevState.song.concat(verse)
    }));
  }



  render() {

    var verses = this.state.song.map((verse, index) => {
      return(<Verse key={verse.key}></Verse>);
    });

    return (
      <div>
        <div>
          {verses}
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
