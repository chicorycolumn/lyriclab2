import React, { Component } from "react";
import styles from "./css/SongsList.module.css";

class SongsList extends Component {
  state = {
    songs: [],
    currentlySortedBy: { key: "trackName", asc: true },
  };

  componentDidMount() {
    let key = "trackName";
    let asc = true;
    this.setState({
      songs: this.props.songs.sort((a, b) => (a[key] > b[key] ? 1 : -1)),
      currentlySortedBy: { key, asc },
    });
  }

  sortBy = (key) => {
    this.setState((currentState) => {
      let asc = !currentState.currentlySortedBy.asc;

      return {
        songs: currentState.songs.sort((a, b) =>
          asc ? (a[key] > b[key] ? 1 : -1) : a[key] > b[key] ? -1 : 1
        ),
        currentlySortedBy: { key, asc },
      };
    });
  };

  tableStructure = [
    { key: "trackName", heading: "Track Name" },
    { key: "collectionName", heading: "Album" },
    {
      key: "trackTimeMillis",
      heading: "Track Length",
    },
  ];

  render() {
    return (
      <div className={`${styles.mainDiv}`}>
        <h1 data-testid="songResultsHeading">
          Songs by {this.props.artistName}:
        </h1>
        <table className={`${styles.mainTable}`}>
          <thead>
            <tr>
              {this.tableStructure.map((item, index) => {
                const heading = item.heading;
                const key = item.key;

                return (
                  <th
                    key={`artistRow${index}`}
                    data-testid={`${key}Button`}
                    className={`${
                      this.state.currentlySortedBy.key == key &&
                      styles.selectedTH
                    }`}
                    onClick={() => {
                      this.sortBy(key);
                    }}
                  >
                    {heading}
                    {this.state.currentlySortedBy.key == key &&
                      (this.state.currentlySortedBy.asc ? "▼" : "▲")}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody data-testid="tableBody">
            {this.props.songs.map((song, index) => {
              return (
                <tr
                  className={`${styles.songRow}`}
                  key={`track${song["trackId"]}`}
                >
                  <td>{song["trackName"]}</td>
                  <td>{song["collectionName"]}</td>
                  <td>{song["trackTimeMillis"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongsList;
