import styles from "./css/App.module.css";
import ArtistForm from "./ArtistForm.jsx";
import SongsList from "./SongsList.jsx";
import dogface from "./images/dogface01.png";

import React, { Component } from "react";

class App extends Component {
  state = { songs: [], artistName: "" };

  setAppState = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div className={`${styles.App}`}>
        <header className={`${styles.AppHeader}`}>
          <img className={`${styles.AppLogo}`} alt="logo" src={dogface} />
          <h1>LyricLab</h1>
        </header>
        <ArtistForm setAppState={this.setAppState} />
        {this.state.songs.length ? (
          <SongsList
            songs={this.state.songs}
            artistName={this.state.artistName}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
