import React, { Component } from "react";

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <label htmlFor="title-filter">Title: </label>
        <input
          onChange={this.props.updateSearchTerm}
          id="title-filter"
          type="text"
          value={this.props.searchTerm}
        />
      </div>
    );
  }
}

export default Filter;
