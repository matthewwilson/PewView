import React from 'react';

export default class NewSong extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      song:[]
    };
  }



  render() {
    return (
      <div className="row justify-content-md-center">
        <div className="col-3">
          <button type="button" className="btn btn-outline-primary btn-block pewview-button">
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
      
    );
  }

}
