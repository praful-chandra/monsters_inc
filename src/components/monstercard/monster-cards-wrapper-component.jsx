import React,{Component} from "react";

import './monstercard-style.scss';

import MonsterCard from './monster-cards-component';


class MonsterCardWrapper extends Component{

  render() {
    return (
      <div className="contentWrapper">
        {this.props.monsters.map((monster) => {
          return <MonsterCard key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }

}

export default MonsterCardWrapper;