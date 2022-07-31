import React from "react";
import { api } from "../utils/Api";
import { PlanetContext } from "./../contexts/PlanetContext";
import Header from "./Header";
import Main from "./Main";
import InfoPlanetDetail from "./InfoPlanetDetail";

import "./../index.css";

const App = () => {
  //принимаем массив планет
  const [planets, setPlanets] = React.useState([]);
  React.useEffect(() => {
    api
      .getPlanetsFromServer()
      .then((data) => {
        return data;
      })
      .then((data) => {
        setPlanets(data.results);
      })
      .catch((err) => {
        console.log(`Упс, ошибка ${err}`);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //массив резидентов с сервера
  const [residents, setResidents] = React.useState([]);

  function handleClosePopup() {
    setPopupOpen(false);
    setSelectedCard({});
    setResidents([]);
  }
  function handleOpenPopup() {
    setPopupOpen(true);
  }
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  //console.log(selectedCard)

  const handleClickOnCard = (card) => {
    handleOpenPopup();
    setSelectedCard(card);
    setResidents(card.residents);
  };

  return (
    <div className="page">
      <Header />
      <PlanetContext.Provider value={planets}>
        <Main clickOnCard={handleClickOnCard} />

        <InfoPlanetDetail
          onClose={handleClosePopup}
          isOpen={isPopupOpen}
          clickedCard={selectedCard}
          residentsData={residents}
        />
      </PlanetContext.Provider>
    </div>
  );
};

export default App;
