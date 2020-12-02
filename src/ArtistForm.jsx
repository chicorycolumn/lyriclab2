import React, { Component } from "react";
import {
  fetchArtists,
  fetchArtistsAsync,
  fetchSongs,
  fetchSongsAsync,
} from "./utils/getUtils.js";
import styles from "./css/ArtistForm.module.css";

class ArtistForm extends Component {
  state = {
    artistName: "",
    submittedArtistName: "",
    artists: [],
    isLoading: false,
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
      isLoading: true,
    });

    fetchArtistsAsync(artistName).then((artists) => {
      this.setState({ isLoading: false, artists });
      this.props.setAppState({ songs: [] });
    });
  };

  handleArtistSelection = (artist) => {
    const { artistName, artistId } = artist;

    fetchSongsAsync(artistName, artistId).then((songs) => {
      this.props.setAppState({ songs, artistName });
      this.setState({
        artistName: "",
        submittedArtistName: "",
        artists: [],
        isLoading: false,
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
        {this.state.submittedArtistName ? (
          <p data-testid="artistNameFeedbackDisplay">{`Artist results for ${this.state.submittedArtistName}:`}</p>
        ) : (
          ""
        )}

        {this.state.submittedArtistName &&
          (this.state.isLoading ? (
            <p>loading</p>
          ) : this.state.artists.length ? (
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
          ) : (
            <p data-testid="artistNameFeedbackDisplay">
              No artists by the name {this.state.submittedArtistName} were found
            </p>
          ))}
      </div>
    );
  }
}

export default ArtistForm;
