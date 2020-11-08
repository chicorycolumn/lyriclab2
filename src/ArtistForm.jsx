import React, { Component } from "react";

class ArtistForm extends Component {
  state = { artistName: "" };

  handleFormChange = (event) => {
    this.setState({ artistName: event.target.value });
  };

  handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(this.state.artistName);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <input
            onChange={this.handleFormChange}
            type="text"
            placeholder="Enter artist name"
            value={this.state.artistName}
          />
          <button type="Submit">Search artists</button>
        </form>
      </div>
    );
  }
}

export default ArtistForm;
