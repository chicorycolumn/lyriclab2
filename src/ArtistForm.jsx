import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  // fetchArtists,
  // fetchSongs,
  fetchArtistsAsync,
  fetchSongsAsync,
} from "./utils/getUtils.js";
import styles from "./css/ArtistForm.module.css";
import spinnerStyles from "./css/spinnerStyles.module.css";

class ArtistForm extends Component {
  state = {
    artistName: "",
    submittedArtistName: "",
    artists: [],
    loadingArtists: false,
  };

  handleFormChange = (event) => {
    this.setState({ artistName: event.target.value, submittedArtistName: "" });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();

    const { artistName } = this.state;

    this.setState({
      artistName: "",
      submittedArtistName: artistName,
      loadingArtists: true,
    });

    fetchArtistsAsync(artistName).then((artists) => {
      this.setState({ loadingArtists: false, artists });
      this.props.setAppState({ songs: [] });
    });
  };

  handleArtistSelection = (artist) => {
    this.setState({ loadingSongs: true });

    const { artistName, artistId } = artist;

    fetchSongsAsync(artistName, artistId).then((songs) => {
      this.props.setAppState({ songs, artistName, loadingSongs: false });
      this.setState({
        artistName: "",
        submittedArtistName: "",
        artists: [],
        loadingArtists: false,
        loadingSongs: false,
      });
    });
  };

  render() {
    return (
      <div data-testid="artistForm">
        <form onSubmit={this.handleSubmitForm}>
          <input
            data-testid="artistNameInput"
            onChange={this.handleFormChange}
            type="text"
            placeholder="Enter artist name"
            value={this.state.artistName}
          />
          <button data-testid="artistNameSubmitButton" type="Submit">
            Search artists
          </button>
        </form>

        {this.state.submittedArtistName &&
          (this.state.loadingArtists || this.state.loadingSongs ? (
            <p
              data-testid="loadingArtistsText"
              className={spinnerStyles.loadingText}
            >
              Loading...
            </p>
          ) : this.state.artists.length ? (
            <>
              <p data-testid="artistNameFeedbackDisplay">{`Artist results for ${this.state.submittedArtistName}:`}</p>
              <ul>
                {this.state.artists.map((artist) => {
                  return (
                    <li
                      data-testid="artistResult"
                      onClick={() => {
                        this.handleArtistSelection(artist);
                      }}
                      className={`${styles.artistBox}`}
                      key={`artist${artist.artistId}`}
                    >{`${artist.artistName} (${artist.primaryGenreName})`}</li>
                  );
                })}
              </ul>
            </>
          ) : (
            <p data-testid="artistNameFeedbackDisplay">
              No artists by the name {this.state.submittedArtistName} were found
            </p>
          ))}
      </div>
    );
  }
}

ArtistForm.propTypes = {
  setAppState: PropTypes.func,
};

export default ArtistForm;
