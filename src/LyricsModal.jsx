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
            {this.props.loadingLyrics ? (
              "Loading..."
            ) : this.props.currentModal.lyrics.length ? (
              <>
                <h1>{`${this.props.currentModal.trackName} by ${this.props.currentModal.artistName}`}</h1>
                {this.props.currentModal.lyrics
                  .split(/\r\n|\r|\n/)
                  .map((line) => {
                    return <p>{line}</p>;
                  })}
              </>
            ) : (
              "No lyrics found."
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LyricsModal;
