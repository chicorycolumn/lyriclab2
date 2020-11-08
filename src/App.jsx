import styles from "./css/App.module.css";
import ArtistForm from "./ArtistForm.jsx";
import SongsList from "./SongsList.jsx";

import React, { Component } from "react";

class App extends Component {
  state = { songs: [] };

  setAppState = (data) => {
    this.setState(data);
  };

  render() {
    return (
      <div className={`${styles.App}`}>
        <header className={`${styles.AppHeader}`}>
          <h1>LyricLab</h1>
        </header>
        <ArtistForm setAppState={this.setAppState} />
        {this.state.songs.length ? <SongsList /> : ""}
      </div>
    );
  }
}

export default App;
