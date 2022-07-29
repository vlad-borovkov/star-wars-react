import React from "react";
// import { CurrentUserContext } from "./../contexts/CurrentUserContext";

const CharachterCard = ({ card, onCardClick, onConfirmDelete }) => {
  

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li style={{ listStyleType: "none" }}>
      <div className="card">
        <h2 className="card__title" onClick={handleClick}>
          {card.name}
        </h2>
        <div className="card__description">
          <ul className="card__planet-info-list">
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.rotation_period}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.orbital_period}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.diameter}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.climate}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.gravity}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.terrain}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.surface_water}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.population}
            </li>
            <li className="card__planet-info-list-item">
              <b></b>&nbsp;{card.residents.length}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default CharachterCard;
