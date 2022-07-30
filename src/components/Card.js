import React from "react";
// import { CurrentUserContext } from "./../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onConfirmDelete }) => {
  
  function handleClick() {
    onCardClick(card);
  }

  return (
    <li style={{ listStyleType: "none" }}>
      <div className="card" onClick={handleClick}>
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__description">
          <ul className="card__planet-info-list">
            <li className="card__planet-info-list-item">
              <b>Rotation period:</b>&nbsp;{card.rotation_period}
            </li>
            <li className="card__planet-info-list-item">
              <b>Orbital period:</b>&nbsp;{card.orbital_period}
            </li>
            <li className="card__planet-info-list-item">
              <b>Diameter period:</b>&nbsp;{card.diameter}
            </li>
            <li className="card__planet-info-list-item">
              <b>Climate:</b>&nbsp;{card.climate}
            </li>
            <li className="card__planet-info-list-item">
              <b>Gravity:</b>&nbsp;{card.gravity}
            </li>
            <li className="card__planet-info-list-item">
              <b>Terrain:</b>&nbsp;{card.terrain}
            </li>
            <li className="card__planet-info-list-item">
              <b>Surface water:</b>&nbsp;{card.surface_water}
            </li>
            <li className="card__planet-info-list-item">
              <b>Population:</b>&nbsp;{card.population}
            </li>
            <li className="card__planet-info-list-item">
              <b>Residents:</b>&nbsp;{card.residents.length}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Card;
