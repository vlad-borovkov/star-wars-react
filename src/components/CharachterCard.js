import React from "react";
// import { CurrentUserContext } from "./../contexts/CurrentUserContext";

const CharachterCard = ({ card, onCardClick, onConfirmDelete }) => {
  

  return (
    <li style={{ listStyleType: "none" }}>
      <div className="card">
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__description">
          <ul className="card__planet-info-list">
            <li className="card__planet-info-list-item">
              <b>Height:</b>&nbsp;{card.height}
            </li>
            <li className="card__planet-info-list-item">
              <b>Mass:</b>&nbsp;{card.mass}
            </li>
            <li className="card__planet-info-list-item">
              <b>Hair color:</b>&nbsp;{card.hair_color}
            </li>
            <li className="card__planet-info-list-item">
              <b>Skin color:</b>&nbsp;{card.skin_color}
            </li>
            <li className="card__planet-info-list-item">
              <b>Eye color:</b>&nbsp;{card.eye_color}
            </li>
            <li className="card__planet-info-list-item">
              <b>Birth year:</b>&nbsp;{card.birth_year}
            </li>
            <li className="card__planet-info-list-item">
              <b>Gender:</b>&nbsp;{card.gender}
            </li>
            <li className="card__planet-info-list-item">
              <b>Homeworld:</b>&nbsp;{card.homeworld}
            </li>
            <li className="card__planet-info-list-item">
              <b>Films:</b>&nbsp;{card.films.length}
            </li>
            <li className="card__planet-info-list-item">
              <b>Species:</b>&nbsp;{card.species.length}
            </li>
            <li className="card__planet-info-list-item">
              <b>Vehicles:</b>&nbsp;{card.vehicles.length}
            </li>
            <li className="card__planet-info-list-item">
              <b>Starships:</b>&nbsp;{card.starships.length}
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default CharachterCard;
