import React from 'react';
import ReactDOM from 'react-dom/client';
import yenistyle from "./yenistyle.css"
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  //^-1 APP projemizi calısıtıyoruz index.js icinde
);

