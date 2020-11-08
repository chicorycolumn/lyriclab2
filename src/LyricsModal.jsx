import React, { Component } from "react";
import styles from "./css/LyricsModal.module.css";

class LyricsModal extends Component {
  render() {
    return (
      <div className={`${styles.overlay}`}>
        <div className={`${styles.modal}`}>
          <button
            onClick={this.props.exitLyricsModal}
            className={`${styles.exitButton}`}
          >
            &times;
          </button>
          <div className={`${styles.innerModal}`}>
            <h1>{`${this.props.currentModal.trackName} by ${this.props.currentModal.artistName}`}</h1>
            {this.props.lyrics.split(/\r\n|\r|\n/).map((line) => {
              return <p>{line}</p>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default LyricsModal;
