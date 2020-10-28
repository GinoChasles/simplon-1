
import React from 'react';

import Pokedex from "./pokedex/Pokedex";

import './css/App.css';

function importAll(r) {
  return r.keys().map(r);
}

importAll(require.context('./img/preview/', false, /\.(png|jpe?g|svg|gif)$/));

function App() {
  return (
    <Pokedex />
  );
}

export default App;
