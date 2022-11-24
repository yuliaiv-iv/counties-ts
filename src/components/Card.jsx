import React from "react";
import styled from "styled-components";

function Card({ image, name, subInfo, onClick }) {
  return (
    <li onClick={onClick}>
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <ul>
          {subInfo.map(({ description, title }) => (
            <li key={title}>
              <h3>
                {title}: <span>{description}</span>
              </h3>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default Card;
