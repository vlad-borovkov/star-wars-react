import React from "react";
import { PlanetContext } from "../contexts/PlanetContext";

// import { CurrentUserContext } from "./../contexts/CurrentUserContext";
// import { CardsContext } from "./../contexts/CardsContext";

import Card from "./Card";
import Spinner from "./Spinner";
import { dataPlanet } from "../contexts/DataPlanet";



const Main = ({clickOnCard}) => {

const currentPlanetData = React.useContext(PlanetContext); //dataPlanet //
//console.log(currentPlanetData)
  return (
    <main>
      <h1 className="planets-title">
        your personal guide to the Star Wars galaxy
      </h1>

      <section>
        {currentPlanetData.length > 0 ? (
        <ul className="planets-grid">
          {currentPlanetData.map((cardItem, index) => (
            <Card
            key={index}
            card={cardItem}
            onCardClick={clickOnCard}
          />
          ))}
        </ul>
        ) : (<Spinner/>) }
        
      </section>
    </main>
  );
};

export default Main;
