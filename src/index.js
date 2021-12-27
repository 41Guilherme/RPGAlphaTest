import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StatesProvider } from './components/JS/provider';
import {StatesProvider2} from './components/JS/skillprovider'
ReactDOM.render(
  <React.StrictMode>
    <StatesProvider>
      <StatesProvider2>
        <App />
      </StatesProvider2>
    </StatesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


