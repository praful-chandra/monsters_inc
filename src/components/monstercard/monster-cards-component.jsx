import React from "react";

const MonsterCard = (props) => {
  const monster = props.monster;
  return (
    <div className="monsterCard">
      <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2?size=180x180`} />
      <p>{monster.name}</p>
      <p>{monster.email}</p>
    </div>
  );
};

export default MonsterCard;
