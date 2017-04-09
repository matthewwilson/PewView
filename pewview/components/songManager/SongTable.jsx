import React from 'react';

export default class SongTable extends React.Component {

  render() {
    return (
      <table className="table table-hover table-song-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Tags</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Hello World</th>
            <td>112</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    );
  }

}
