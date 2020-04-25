import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchName: "",
    };
  }

  styles = {
    width: "390px",
    display: "block",
    height: "5rem",
    margin: "3rem",
    fontSize: "2.2rem",
    outline: "none",
    border: "none",
    padding: "1rem",
    borderRadius: "50px",
  };

  submitForm = (e) => {
    e.preventDefault();
    this.props.callBack(this.state.searchName);
    // this.setState({
    //     searchName : ""
    // })
  };

  render() {
    return (
      <form action="#" onSubmit={this.submitForm}>
        <input
          style={this.styles}
          value={this.state.searchName}
          type="search"
          name="Search"
          id="serarch"
          placeholder="search monsters"
          onChange={(elem) => {
            this.setState({
              searchName: elem.target.value,
            });
          }}
        />
      </form>
    );
  }
}

export default Search;
