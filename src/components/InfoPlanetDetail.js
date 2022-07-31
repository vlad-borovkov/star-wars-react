import React from "react";
import CharachterCard from "./CharachterCard";
import Spinner from "./Spinner";
import { api } from "../utils/Api";

const InfoPlanetDetail = ({ onClose, isOpen, clickedCard, residentsData }) => {

const [residentsArray, setResidentsArray] = React.useState([]);

//универсальная функция получения объектов персонажей
function setPeopleFromServer() {
  const residentPromises = residentsData.map((item) =>
  api.getResidentsFromServer(item.replace(/[^0-9]/g, ""))
);
Promise.all(residentPromises).then(values => {
  setResidentsArray(values);
});
}

function setFilteredPeopleFromServer(genderSelect) {
  const residentPromises = residentsData.map((item) =>
  api.getResidentsFromServer(item.replace(/[^0-9]/g, ""))
);
Promise.all(residentPromises).then(values => {
  setResidentsArray(values.filter(el => el.gender === genderSelect));
})

}

//рендерим карточки людей из api запроса при открытии карточки
React.useEffect(() => {
  setPeopleFromServer()
 
}, [clickedCard]);

//очищаем массив людей при закрытии
React.useEffect(()=> {
  setResidentsArray([]);
  setSexSelector('all')
}, [onClose])

//функция поиска при изменении селектора
const findByGender = (genderSelect) => {
  if (genderSelect === 'all') {
    setPeopleFromServer()
    setSexSelector("all")
  }
  else setFilteredPeopleFromServer(genderSelect)
}

// передача value селектора после сабмита формы
const [sexSelector, setSexSelector] = React.useState("")
function handleSubmitForm(e) {
  e.preventDefault();
  findByGender(
    sexSelector
  ) 
}
// захват переключения селектора
function handleSelectorChange(e) {
   setSexSelector(e.target.value)
}

  return (
    <div className={`popup ${isOpen ? "popup_on" : ""}`}>
      <div className="popup__planet-container">
        <button
          className="popup__planet-container-close-icone"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__planet-container-title">{clickedCard.name}</h2>

        <form 
        className="search form form_type_search"
        id="sex"
        onSubmit={handleSubmitForm}>
          <h3 className="form__title">specify gender</h3>
          <div className="form__wrapper">
            <div className="form__select-container">
              <select
                id="sex"
                className="form__select"
                value={sexSelector}
                onChange={handleSelectorChange}
              >
                <option value="all" >All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button className="form__btn" >
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
             <ul className="person-grid">
              {residentsArray.length > 0 ? (residentsArray.map((cardItem, index) => (
                    <CharachterCard
                      key={index}
                      card={cardItem}
                    />
                  ))) : (<Spinner/>) }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPlanetDetail;
