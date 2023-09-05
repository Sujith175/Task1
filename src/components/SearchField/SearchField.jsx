import React, { Component } from "react";

export default class SearchField extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <>
        <input
          className="search-box"
          type="search"
          placeholder="Search Pokemon"
          onChange={onSearchChange}
        />
      </>
    );
  }
}
