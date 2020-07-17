import React, { useState } from 'react';
import Items from './Items';
import LogicalFight from './LogicalFight';
import PicksInfo from './PicksInfo';

const PlayerVSPlayer = () => {
    const [playerOnePick, setplayerOnePick] = useState(null);
    const [playerTwoPick, setplayerTwoPick] = useState(null);
    const [result, setResult] = useState(null);
    const [playerWins, setPlayerWins] = useState(0);
    const [playerTwoWins, setplayerTwoWins] = useState(0);
    const [showSelections, setshowSelections] = useState(false);
    const [showingButton, setShowingButton] = useState(null);

    const fight = () => {
            const result = LogicalFight.startFight(playerOnePick,playerTwoPick);
            setResult(result);
            if (result.finish==='success') setPlayerWins(playerWins+1); 
            if (result.finish==='danger') setplayerTwoWins(playerTwoWins+1); 
            setshowSelections(true);
            setShowingButton('playAgain');
    }

    const restartGame = () => {
        setResult(null);
        setShowingButton(null);
        setplayerOnePick(null);
        setplayerTwoPick(null);
        setshowSelections(false);
    }

    const playerOneSelection = (pick) => {
        setResult(null);
        setplayerOnePick(pick);
        if (playerTwoPick) setShowingButton('fight');
    }

    const playerTwoSelection = (pick) => {
        setResult(null);
        setplayerTwoPick(pick);
        if (playerOnePick) setShowingButton('fight');
    }

    return(
        <>
        <div className="bg-secondary m-3 rounded align-items-center">

            {(showingButton==='fight' || !showingButton) &&
            <Items setAnItem={playerOneSelection} playerColor='success'/>}
            
            <PicksInfo playerOne='Player 1' playerTwo='Player 2'
                       result={result} playerOnePick={playerOnePick}
                       playerTwoPick={playerTwoPick} showSelections={showSelections}/>

            {(showingButton==='fight' || !showingButton) &&
            <Items setAnItem={playerTwoSelection} playerColor='danger'/>}
        </div>

        <div className="row">
            <p className="col text-center text-light">Player 1 score: {playerWins}</p>
            {showingButton==='fight' && 
                <button className="btn btn-danger col-2"
                onClick={fight} >FIGHT!</button>}
            {showingButton==='playAgain' && 
                <button className="btn btn-info col-2"
                onClick={restartGame} >PLAY AGAIN!</button>}
            <p className="col text-center text-light">Player 2 score: {playerTwoWins}</p>
        </div>
        </>
    );
}

export default PlayerVSPlayer;