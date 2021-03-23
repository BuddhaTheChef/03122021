import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from './components/Main';
import NextPage from './components/Next';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}/>
        <Route exact path="/Next" component={NextPage}/>
      </Switch>
    </Router>
  );
}

export default App;
