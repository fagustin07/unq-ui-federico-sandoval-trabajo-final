import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayVsIA from './PlayVsIA';


function App() {
  return (
    <div className="bg-dark p-2 mt-2 rounded container">
        <h1 className="text-center text-bolder text-light">
          Rock, Paper, Scissors, Lizard or Spock.
        </h1>
        <PlayVsIA/>      
    </div>
  );
}

export default App;
