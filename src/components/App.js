import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { api } from "../utils/Api";

import './../index.css';

import Header from "./Header";


const App = () => {

  return (
    <div className="page">

    <Header/>

    </div>
  );
}

export default App;
