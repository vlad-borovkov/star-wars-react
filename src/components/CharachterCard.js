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
              <b>height</b>&nbsp;{card.height}
            </li>
            <li className="card__planet-info-list-item">
              <b>mass</b>&nbsp;{card.mass}
            </li>
            <li className="card__planet-info-list-item">
              <b>hair_color</b>&nbsp;{card.hair_color}
            </li>
            <li className="card__planet-info-list-item">
              <b>skin_color</b>&nbsp;{card.skin_color}
            </li>
            <li className="card__planet-info-list-item">
              <b>eye_color</b>&nbsp;{card.eye_color}
            </li>
            <li className="card__planet-info-list-item">
              <b>birth_year</b>&nbsp;{card.birth_year}
            </li>
            <li className="card__planet-info-list-item">
              <b>gender</b>&nbsp;{card.gender}
            </li>
            <li className="card__planet-info-list-item">
              <b>homeworld</b>&nbsp;{card.homeworld}
            </li>
            <li className="card__planet-info-list-item">
              <b>films</b>&nbsp;{card.films.length}
            </li>
            <li className="card__planet-info-list-item">
              <b>species</b>&nbsp;{card.species.length}
            </li>
            <li className="card__planet-info-list-item">
              <b>vehicles</b>&nbsp;{card.vehicles.length}
            </li>
            <li className="card__planet-info-list-item">
              <b>starships</b>&nbsp;{card.starships.length}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default CharachterCard;
