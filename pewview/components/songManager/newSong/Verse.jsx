import React from 'react';

export default class Verse extends React.Component {

  constructor(props) {
    super(props);
    console.log("new verse");
  }

  render() {
    return (
      <div className="form-group">
        <textarea className="new-song-text-area" rows="10"></textarea>
      </div>
    );
  }

}
