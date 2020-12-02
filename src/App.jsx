import styles from "./css/App.module.css";
import spinnerStyles from "./css/spinnerStyles.module.css";
import ArtistForm from "./ArtistForm.jsx";
import SongsList from "./SongsList.jsx";
import dogface from "./images/dogface01.png";

import React, { Component } from "react";

class App extends Component {
  state = { songs: [], loadingSongs: false, artistName: "" };

  setAppState = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div className={`${styles.App}`}>
        <header className={`${styles.AppHeader}`}>
          <img
            onClick={() => {
              window.location.reload();
            }}
            className={`${styles.AppLogo}`}
            alt="logo"
            src={dogface}
          />
          <h1
            className={`${styles.AppTitle}`}
            onClick={() => {
              window.location.reload();
            }}
          >
            LyricLab
          </h1>
        </header>

        {this.state.loadingSongs ? (
          <p
            data-testid="loadingSongsText"
            className={spinnerStyles.loadingText}
          >
            Loading...
          </p>
        ) : (
          ""
        )}
        {this.state.songs.length ? (
          <SongsList
            songs={this.state.songs}
            artistName={this.state.artistName}
          />
        ) : (
          <ArtistForm setAppState={this.setAppState} />
        )}
      </div>
    );
  }
}

export default App;
