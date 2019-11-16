import React, { Component } from "react";
import SearchBar from "../SearchBar";

class App extends Component {
  state = { searchTerm: "" };

  componentDidUpdate() {
    // make network request
  }

  onSearchSubmit = (term) => {
    this.setState({ searchTerm: term });
  };

  render() {
    return (
      <div>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
