import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { api } from "../utils/Api";

import { PlanetContext } from "./../contexts/PlanetContext";

import "./../index.css";

import Header from "./Header";
import Main from "./Main";
import InfoPlanetDetail from "./InfoPlanetDetail";

const App = () => {
  //принимаем массив планет
  const [planets, setPlanets] = React.useState([]);
  React.useEffect(() => {
    api
      .getPlanetsFromServer()
      .then((data) => {
        return (data);
      })
      .then((data) => {
        setPlanets(data.results);
      })
      .catch((err) => {
        console.log(`Упс, ошибка ${err}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClosePopup() {
    setPopupOpen(false)
  }
  function handleOpenPopup() {
    setPopupOpen(true)
  }
const  [isPopupOpen, setPopupOpen] = React.useState(false)
const [selectedCard, setSelectedCard] = React.useState({});
  
const handleClickOnCard = (card) => {
    handleOpenPopup();
    console.log(card);
  };



  return (
    <div className="page">
      <Header />
      <PlanetContext.Provider value={planets}>
          <Main 
          clickOnCard={handleClickOnCard}/>


          <InfoPlanetDetail
          onClose={handleClosePopup}
          isOpen={isPopupOpen}
          />
      </PlanetContext.Provider>
    </div>
  );
};

export default App;

