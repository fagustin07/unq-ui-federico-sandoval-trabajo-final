import React, { useState } from 'react';
import Items from './Items';
import LogicalFight from './LogicalFight';
import PicksInfo from './PicksInfo';

const PlayVsIA = () => {
    const [playerOnePick, setplayerOnePick] = useState(null);
    const [pickIA, setPickIA] = useState(null);
    const [result, setResult] = useState(null);
    const [playerWins, setPlayerWins] = useState(0);
    const [iaWins, setIaWins] = useState(0);
    const [showSelections, setshowSelections] = useState(false);
    const [showingButton, setShowingButton] = useState(null);

    const  randomPick = () => {
        const selectedItem = Math.floor(Math.random() * 5);
        const list = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
        return list[selectedItem];
    }

    const fight = () => {
            const result = LogicalFight.startFight(playerOnePick,pickIA,'vsSheldon');
            setResult(result);
            if (result.finish==='success') setPlayerWins(playerWins+1); 
            if (result.finish==='danger') setIaWins(iaWins+1);
            setshowSelections(true);
            setShowingButton('playAgain');
    }

    const restartGame = () => {
        setResult(null);
        setShowingButton(null);
        setplayerOnePick(null);
        setPickIA(null);
        setshowSelections(false);
    }

    const handleSelect = (pick) => {
        setResult(null);
        setplayerOnePick(pick);
        setPickIA(randomPick());
        setShowingButton('fight');
    }

    return(
        <>
        <div className="bg-secondary m-3 rounded">

            {(showingButton==='fight' || !showingButton) &&
            <Items setAnItem={handleSelect} playerColor='light'/>}
            
            <PicksInfo playerOne='Player' playerTwo='Sheldon'
                       result={result} playerOnePick={playerOnePick}
                       playerTwoPick={pickIA} showSelections={showSelections}/>

        </div>

        <div className="row">
            <p className="col text-center text-light">Player: {playerWins}</p>
            {showingButton==='fight' && 
                <button className="btn btn-danger col-2"
                onClick={fight} >FIGHT!</button>}
            {showingButton==='playAgain' && 
                <button className="btn btn-info col-2"
                onClick={restartGame} >PLAY AGAIN!</button>}
            <p className="col text-center text-light">Sheldon: {iaWins}</p>
        </div>
        </>
    );
}

export default PlayVsIA;