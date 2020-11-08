import React, { Component } from "react";
import styles from "./css/SongsList.module.css";
import { fetchLyrics } from "./utils/getUtils.js";
import { convertMillisecondsToMinutes } from "./utils/formattingUtils.js";
import LyricsModal from "./LyricsModal.jsx";

class SongsList extends Component {
  state = {
    songs: [],
    currentlySortedBy: { key: "trackName", asc: true },
    lyrics: "",
    currentModal: { artistName: "", trackName: "" },
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

  showLyricsModal = (artistName, trackName) => {
    console.log("Will fetch lyrics for", { artistName, trackName });

    fetchLyrics(artistName, trackName).then((lyrics) => {
      console.log("Lyrics came back as", { lyrics });
      this.setState({ lyrics, currentModal: { artistName, trackName } });
    });
  };

  exitLyricsModal = () => {
    this.setState({
      lyrics: "",
      currentModal: { artistName: "", trackName: "" },
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
        {this.state.lyrics.length ? (
          <LyricsModal
            lyrics={this.state.lyrics}
            exitLyricsModal={this.exitLyricsModal}
            currentModal={this.state.currentModal}
          />
        ) : (
          ""
        )}

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
                  data-testid="songRow"
                  onClick={() => {
                    this.showLyricsModal(song.artistName, song.trackName);
                  }}
                >
                  <td>{song["trackName"]}</td>
                  <td>{song["collectionName"]}</td>
                  <td>
                    {convertMillisecondsToMinutes(song["trackTimeMillis"])}
                  </td>
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
