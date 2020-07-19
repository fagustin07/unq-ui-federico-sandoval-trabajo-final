import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import PlayVsIA from './components/PlayVsIA';
import { useState } from 'react';
import PlayerVSPlayer from './components/PlayerVSPlayer';

function App() {
  const [gameMode, setGameMode] = useState(true);

  return (
      <div className="bg-dark p-2 mt-2 rounded shad container">
          <Navigation onChangeGameMode={setGameMode}/>
          {gameMode && <PlayVsIA/>}
          {!gameMode && <PlayerVSPlayer/>}
      </div>
  )
}

export default App;
