import React from "react";
import { PlanetContext } from "../contexts/PlanetContext";
//глобальный стейт персонажей
import CharachterCard from "./CharachterCard";

const InfoPlanetDetail = ({ onClose, isOpen }) => {

  return (
    <div className={`popup ${isOpen ? "popup_on" : ""}`}>
      
      <div className="popup__planet-container">
        <button
          className="popup__planet-container-close-icone"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__planet-container-title">Planet title</h2>

        <form className="search" class="form form_type_search">
              <h3 className="form__title">specify gender</h3>
              <div className="form__wrapper">
                <div className="form__select-container">
                  <select
                    name="sex"
                    className="form__select"
                    multiple={true}
                    value={["Male", "Female"]}
                  ></select>
                </div>
                <button className="form__btn" onClick={""}>
                  Search
                </button>
              </div>
            </form>
        <div className="popup__description-container">
          <div className="popup__planet-info">
            <h3 className="popup__planet-info-title">Planet info</h3>
            <ul>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
              <li>Some info</li>
            </ul>
          </div>
          <div className="characters-info">
            <h3 className="characters-info__title">Character's info</h3>
            <div className="characters-info__lists">
              {/* <CharachterCard
              // key={"index"}
              // card={"cardItem"}
              // onCardClick={"props.clickOnCard"}
              // onConfirmDelete={"props.onConfirmDelete"}
            /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPlanetDetail;
