import React from 'react';
import './App.css';
import { Fragment } from 'react';
import Page from './components/JS/Page';
import Mapa from './components/JS/Mapa';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Rules from './components/JS/Rules';
import Cruze  from './components/JS/Chars/Cruze';
import Ban from './components/JS/Chars/Ban';
import Doc from './components/JS/Chars/Doc';
import Jes from './components/JS/Chars/Jes';
import Lep from './components/JS/Chars/Lep';
import Ves from './components/JS/Chars/Ves';

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path='/char5'>

            <Ban/>

          </Route>
          <Route path='/char4'>

            <Jes/>

          </Route>
          <Route path='/char3'>

            <Ves/>

          </Route>
          <Route path='/char2'>
            
            <Doc/>

          </Route>
          <Route path='/char1'>

            <Lep/>

          </Route>
          <Route path='/char'>

            <Cruze/>

          </Route>

          <Route path='/map'>
            <Mapa/>
          </Route>
          <Route path='/rules'>
            <Rules/>
          </Route>
          <Route path='/'>
            <Page/>
          </Route>
        </Switch>
      </Router>

    </Fragment>

  );
}

export default App;
