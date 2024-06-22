import React from "react";

export default function Item(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <h2 className="center-19">{props.name}</h2>
    </div>
  );
}