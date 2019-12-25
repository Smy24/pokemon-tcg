import React from 'react';
import logo from './logo.svg';
import './App.css';
import Deck from './Deck';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Welcome!</h1>
      <div className="App-p1 row">
        <Deck/>    
        <h2 className="App-player">P1 Hand</h2>
      </div>
      <h1 className="App-winner">{winner() ? "P1 wins" : "P2 wins"}</h1>
      <div className="App-p2 row">
        <h2 className="App-player">P2 Hand</h2>
        <Deck/>    
      </div>
    </div>
  );
}

var p1 = false;
function winner() {
  var int = Math.floor(Math.random() * 2);
  if(int === 0) {p1 = true;}
  else {p1 = false;}
  return p1;
}

export default App;
