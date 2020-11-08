import React, { Component } from "react";

class SongsList extends Component {
  state = { songs: [] };

  componentDidMount() {
    this.setState({ songs: this.props.songs });
  }

  render() {
    console.log(this.state.songs);
    return (
      <div>
        <table>
          <tr>
            <td>Track Name</td>
            <td>Album</td>
            <td>Track Length</td>
          </tr>

          {this.props.songs.map((song, index) => {
            return (
              <tr key={`track${song["trackId"]}`}>
                <td>{song["trackName"]}</td>
                <td>{song["collectionName"]}</td>
                <td>{song["trackTimeMillis"]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default SongsList;
