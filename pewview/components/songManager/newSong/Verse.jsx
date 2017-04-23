import React from 'react';
import Textarea from 'react-textarea-autosize';

export default class Verse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      needsFocus:true
    };

  }

  componentDidMount() {
    if(this.textInput) {
      this.textInput.focus();
    }
  }

  render() {
    if(this.state.needsFocus) {
      return (
        <div className="form-group">
          <Textarea className="new-song-text-area" ref={(input) => {this.textInput = input; }}></Textarea>
        </div>
      );
    } else {
      return (
        <div className="form-group">
          <Textarea className="new-song-text-area"></Textarea>
        </div>
      );
    }
  }

}
