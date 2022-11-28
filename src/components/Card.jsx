import React from "react";
import styled from "styled-components";
import InfoText from "../UI/InfoText";

const ListItem = styled.li`
  width: 100%;
  margin: auto;
  border-radius: var(--radius);
  background-color: var(--color-ui);
  box-shadow: var(--shadow);
  cursor: pointer;
  &:hover {
    box-shadow: var(--hover-shadow);
  }
`;
const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
`;

const InfoContainer = styled.div`
  padding: 24px 24px 46px;
`;
const Title = styled.h3`
  margin: 0;
  font-size: var(--fs-large);
  font-weight: var(--fw-bold);
  line-height: 26px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const InfoList = styled.ul`
  padding: 0;
  list-style: none;
  margin-top: 16px;

  li {
    margin-bottom: 3px;
  }
`;

function Card({ image, name, subInfo, onClick, onKeyPress }) {
  return (
    <ListItem onClick={onClick} onKeyPress={onKeyPress} tabIndex="0">
      <CardImage src={image} alt={name} />
      <InfoContainer>
        <Title>{name}</Title>
        <InfoList>
          {subInfo.map(({ description, title }) => (
            <li key={title}>
              <InfoText title={title} description={description || "N/A"} />
            </li>
          ))}
        </InfoList>
      </InfoContainer>
    </ListItem>
  );
}

export default Card;
