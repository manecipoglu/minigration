import React from 'react';
import './App.css';

import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Immigration from "./Pages/Immigration";
import NoMatch from "./Pages/NoMatch";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <NavBar />
        <main className="main-content">
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/immigration" component={Immigration} />
          </Switch>
        </main>
      </React.Fragment>
    </BrowserRouter>
  );
}


export default App;
