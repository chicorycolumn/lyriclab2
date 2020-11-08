import React, { Component } from "react";

class ArtistForm extends Component {
  state = { artistName: "", submittedArtistName: "" };

  handleFormChange = (event) => {
    this.setState({ artistName: event.target.value, submittedArtistName: "" });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state.artistName);

    let { artistName } = this.state;

    this.setState({ artistName: "", submittedArtistName: artistName });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default ArtistForm;
