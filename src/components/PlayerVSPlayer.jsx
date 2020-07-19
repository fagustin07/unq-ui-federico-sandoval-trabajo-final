import React, { useState } from 'react';
import Items from './Items';
import LogicalFight from './LogicalFight';
import PicksInfo from './PicksInfo';
import Scores from './Scores';

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

    const showItems = () => showingButton==='fight' || !showingButton

    return(
        <>
        <div className={result ? `bg-${result.finish} m-3 rounded shad bor` : 
                                  `bg-secondary m-3 rounded  shad bor` }>

            {showItems() &&
            <Items setAnItem={playerOneSelection} playerColor='success'/>}
            
            <PicksInfo playerOne='Player 1' playerTwo='Player 2'
                       result={result} playerOnePick={playerOnePick}
                       playerTwoPick={playerTwoPick} showSelections={showSelections}/>

            {showItems() &&
            <Items setAnItem={playerTwoSelection} playerColor='danger'/>}
        </div>

        <Scores playerWins={playerWins} fight={fight} showingButton={showingButton}
                playerTwoWins={playerTwoWins} restartGame={restartGame}/>
        </>
    );
}

export default PlayerVSPlayer;