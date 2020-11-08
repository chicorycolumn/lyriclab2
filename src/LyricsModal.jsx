import React, { Component } from "react";
import styles from "./css/LyricsModal.module.css";

class LyricsModal extends Component {
  render() {
    return (
      <div className={`${styles.modal}`}>
        <div className={`${styles.innerModal}`}>Hello hello lyrics go here</div>
      </div>
    );
  }
}

export default LyricsModal;
