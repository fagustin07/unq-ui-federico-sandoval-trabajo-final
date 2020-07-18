import React, { useState } from 'react';
import Items from './Items';
import LogicalFight from './LogicalFight';
import PicksInfo from './PicksInfo';
import Scores from './Scores';

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
        setplayerOnePick(null);
        setPickIA(null);
        setResult(null);
        setShowingButton(null);
        setshowSelections(false);
    }

    const handleSelect = (pick) => {
        setResult(null);
        setplayerOnePick(pick);
        setPickIA(randomPick());
        setShowingButton('fight');
    }
    const showItems = () => showingButton==='fight' || !showingButton
    return(
        <>
        <div className="bg-secondary m-3 rounded">

            {showItems() &&
            <Items setAnItem={handleSelect} playerColor='light'/>}
            
            <PicksInfo result={result} playerOnePick={playerOnePick}
                       playerTwoPick={pickIA} showSelections={showSelections} iaMode={true}/>

        </div>
        <Scores playerWins={playerWins} fight={fight} showingButton={showingButton}
                playerTwoWins={iaWins} restartGame={restartGame} iaMode={true}/>
        </>
    );
}

export default PlayVsIA;