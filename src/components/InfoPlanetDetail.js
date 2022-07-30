import React from "react";
import { PlanetContext } from "../contexts/PlanetContext";
//глобальный стейт персонажей
import CharachterCard from "./CharachterCard";
import { api } from "../utils/Api";

const InfoPlanetDetail = ({ onClose, isOpen, clickedCard, residentsData }) => {
  function handleSubmitForm(e) {
    e.preventDefault();
  }

const [residentsArray, setResidentsArray] = React.useState([]);

React.useEffect(() => {
  const residentPromises = residentsData.map((item) =>
    api.getResidentsFromServer(item.replace(/[^0-9]/g, ""))
  );
  Promise.all(residentPromises).then(values => {
    setResidentsArray(values);
  });
 
}, [clickedCard]);


React.useEffect(()=> {
  setResidentsArray([]);
}, [onClose])


  return (
    <div className={`popup ${isOpen ? "popup_on" : ""}`}>
      <div className="popup__planet-container">
        <button
          className="popup__planet-container-close-icone"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__planet-container-title">{clickedCard.name}</h2>

        <form className="search form form_type_search">
          <h3 className="form__title">specify gender</h3>
          <div className="form__wrapper">
            <div className="form__select-container">
              <select
                name="sex"
                className="form__select"
                multiple={true}
                defaultValue={["Male", "Female"]}
              ></select>
            </div>
            <button className="form__btn" onClick={handleSubmitForm}>
              Search
            </button>
          </div>
        </form>
        <div className="popup__description-container">
          <div className="popup__planet-info">
            <h3 className="popup__planet-info-title">Planet info</h3>

            <ul className="card__planet-info-list">
              <li className="card__planet-info-list-item">
                <b>Rotation period:</b>&nbsp;{clickedCard.rotation_period}
              </li>
              <li className="card__planet-info-list-item">
                <b>Orbital period:</b>&nbsp;{clickedCard.orbital_period}
              </li>
              <li className="card__planet-info-list-item">
                <b>Diameter period:</b>&nbsp;{clickedCard.diameter}
              </li>
              <li className="card__planet-info-list-item">
                <b>Climate:</b>&nbsp;{clickedCard.climate}
              </li>
              <li className="card__planet-info-list-item">
                <b>Gravity:</b>&nbsp;{clickedCard.gravity}
              </li>
              <li className="card__planet-info-list-item">
                <b>Terrain:</b>&nbsp;{clickedCard.terrain}
              </li>
              <li className="card__planet-info-list-item">
                <b>Surface water:</b>&nbsp;{clickedCard.surface_water}
              </li>
              <li className="card__planet-info-list-item">
                <b>Population:</b>&nbsp;{clickedCard.population}
              </li>
            </ul>
          </div>
          <div className="characters-info">
            <h3 className="characters-info__title">Character's info</h3>
            <div className="characters-info__lists">
             <ul className="planets-grid">
                  {residentsArray.map((cardItem, index) => (
                    <CharachterCard
                      key={index}
                      card={cardItem}
                    />
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPlanetDetail;
