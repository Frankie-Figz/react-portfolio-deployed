import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card grow" value={props.id} onClick={() => props.handleClick(props.id)}>
      <div className="img-container">
        <img alt={props.description} src={props.image} />
      </div>
    </div>
  );
}

export default Card;
