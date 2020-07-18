import React from 'react';

const Scores = ({playerWins, fight, playerTwoWins, showingButton, restartGame, iaMode}) => {

    const fstPlayer = iaMode ? 'Player' : 'Player 1' 
    const sndPlayer = iaMode ? 'Sheldon' : 'Player 2'

    return(
        <div className="row">
            <p className="col text-center text-light">{fstPlayer} score: {playerWins}</p>
            {showingButton==='fight' && 
                <button className="btn btn-danger col-2"
                onClick={fight} >FIGHT!</button>}
            {showingButton==='playAgain' && 
                <button className="btn btn-info bgnav col-2"
                onClick={restartGame} >PLAY AGAIN!</button>}
            <p className="col text-center text-light">{sndPlayer} score: {playerTwoWins}</p>
        </div>
    );
}

export default Scores;