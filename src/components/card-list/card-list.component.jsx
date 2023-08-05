import { Component } from "react";
import './card-list.styles.css'
import Card from "../card/card.component.jsx";
const CardList = ({monsters}) => (
     
      <div className="card-list">
        {monsters.map((monster) => {
           
          return (
            
            <Card monsters = {monster} />
          );
        })}
      </div>
);

export default CardList;
