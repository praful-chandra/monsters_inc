import React, { Component } from "react";

import "./App.scss";

import Header from "./components/header/header-component";
import Search from "./components/searchBox/search-component";
import MonsterCard from "./components/monstercard/monster-cards-wrapper-component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      monstersToDisplay: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (data) => {
        const monsters = await data.json();

        this.setState({
          monsters,
          monstersToDisplay: monsters,
        });
      })
      .catch((err) => console.log(err));
  }

  filter = (name) => {
    let monstersToDisplay = this.state.monsters.filter((monster) =>
      monster.name.toLowerCase().includes(name.toLowerCase()) ? true : false
    );

    this.setState({
      monstersToDisplay,
    });
  };

  render() {
    return (
      <div className="app">
        <Header />
        <Search callBack={this.filter} />
        <MonsterCard monsters={this.state.monstersToDisplay} />
      </div>
    );
  }
}

export default App;
