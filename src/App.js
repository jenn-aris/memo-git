import React from 'react';
import Header from './components/Header';

import './App.css';
import Commandes from './components/Commandes';
import Intro from './components/Intro';

function App() {
  console.log (<App />)
  return (
    <div className="App">
     <Header />
     <Intro />
     <Commandes />
    </div>
  );
}

export default App;
