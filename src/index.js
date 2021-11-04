import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StatesProvider } from './components/JS/provider';

ReactDOM.render(
  <React.StrictMode>
    <StatesProvider>
      <App />
    </StatesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


