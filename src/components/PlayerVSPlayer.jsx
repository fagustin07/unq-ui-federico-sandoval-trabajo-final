import React, { useState } from 'react';
import Items from './Items';
import LogicalFight from './LogicalFight';
import Navigation from './Navigation';

const PlayerVSPlayer = () => {
    const [selectedWeapon, setSelectedWeapon] = useState(undefined);
    const [pickIA, setPickIA] = useState(null);
    const randomPickIA = ['rock', 'scissors', 'paper', 'lizard', 'spock']
    const [result, setResult] = useState(undefined);
    const [playerWins, setPlayerWins] = useState(0);
    const [iaWins, setIaWins] = useState(0);

    const  randomPick = () => {
        const selectedItem = Math.floor(Math.random() * 5);
        const list = ['rock', 'scissors', 'paper', 'lizard', 'spock'];
        return list[selectedItem];
      }
    const fight = () => {
        console.log(pickIA);
        console.log(selectedWeapon);
        if (selectedWeapon){
            const result = LogicalFight.startFight(selectedWeapon,pickIA);
            setResult(result);
            if (result.finish==='success') setPlayerWins(playerWins+1); 
            if (result.finish==='danger') setIaWins(iaWins+1); 
        }
    }
    
    const handleSubmit = () =>  {
        setPickIA(randomPick());
        setTimeout(() => fight(), 1000);
    }


    const handleSelect = (pick) => {
        setResult(null);
        setSelectedWeapon(pick);
        setPickIA(randomPick());
        setTimeout(() => fight(), 1000);
    }

    return(
        <>
        <Navigation/>
        <div className="bg-secondary m-3 rounded align-items-center">

            <Items setSelectedWeapon={handleSelect}/>
            
            <div className="col ml-1">
                <div className="col text-center">
                    <h3>Player Pick: </h3>
                    <img src={selectedWeapon ? `${selectedWeapon}.png` : 'unknow-pick.png'}
                        alt='selected item' className="player-item rounded"/>
                </div>
            </div>
            <div className='col ml-1 text-center'>
                <h1>VS</h1>
                {result && <p className={`alert alert-${result.finish} row`}>{result.message}</p>}
            </div>
            <div className="col ml-1">
                <div className="col text-center">
                    <h3>Sheldon Pick: </h3>
                    <img src={pickIA ? `${pickIA}.png` : 'unknow-pick.png'}
                        alt='ia item' className="player-item rounded"/>
                </div>
            </div>
        </div>

        <div className="row">
            <p className="col text-center text-light">Player: {playerWins}</p>
            <button className="btn btn-danger col-2"
                onClick={handleSubmit} >FIGHT!</button>
            <p className="col text-center text-light">Sheldon: {iaWins}</p>
        </div>
        </>
    );
}

export default PlayerVSPlayer;