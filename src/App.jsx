import styles from "./css/App.module.css";
import ArtistForm from "./ArtistForm.jsx";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className={`${styles.App}`}>
        <header className={`${styles.AppHeader}`}>
          <h1>LyricLab</h1>
        </header>
        <ArtistForm />
      </div>
    );
  }
}

export default App;
