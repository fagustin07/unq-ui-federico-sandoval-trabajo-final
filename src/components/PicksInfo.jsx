import React from 'react';

const PicksInfo = ({result, playerOnePick, playerTwoPick, showSelections, iaMode}) => {
    const fstPlayer = iaMode ? 'Player' : 'Player 1'
    const sndPlayer = iaMode ? 'Sheldon' : 'Player 2'
    return(
        <div className="row  align-items-center">
            <div className="col ml-1">
                <div className="text-center">
                <h3>{fstPlayer} Pick: </h3>
                {iaMode && <img src={playerOnePick ? `${playerOnePick}.png` : 'unknow-pick.png'}
                    alt='selected item' className="player-item rounded"/>}
                {!iaMode && <img src={playerOnePick && showSelections ? `${playerOnePick}.png` : 'unknow-pick.png'}
                    alt='selected item' className="player-item rounded"/>}
                </div>
            </div>
            <div className='ml-1 text-center'>
                {!result && <h1>VS</h1>}
                {result && <p className={`alert alert-${result.finish} text-center`}>{result.message}</p>}
            </div>
            <div className="col ml-1">
                <div className="text-center">
                    <h3>{sndPlayer} Pick: </h3>
                    <img src={playerTwoPick && showSelections ? `${playerTwoPick}.png` : 'unknow-pick.png'}
                        alt='ia item' className="player-item rounded"/>
                </div>
            </div>
        </div>
    )
}

export default PicksInfo;