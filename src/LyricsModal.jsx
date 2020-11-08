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
            x
          </button>
          <div className={`${styles.innerModal}`}>
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
