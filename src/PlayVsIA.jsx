import React, { useState } from 'react';
import Items from './Items';
import LogicalFight from './LogicalFight';

const PlayVsIA = () => {
    const [selectedWeapon, setSelectedWeapon] = useState(undefined);
    const [pickIA, setPickIA] = useState(undefined);
    const randomPickIA = ['rock', 'scissors', 'paper', 'lizard', 'spock']
    const [result, setResult] = useState(undefined);
    const [playerWins, setPlayerWins] = useState(0);
    const [iaWins, setIaWins] = useState(0);

    const  randomPick = () => {
        const i = randomPickIA.length;
        const selectedItem = Math.floor(Math.random() * i);
        return randomPickIA[selectedItem];
      }
    
    const handleSubmit = () =>  {
        if (selectedWeapon){
            const result = LogicalFight.startFight(selectedWeapon,pickIA);
            setResult(result);
            if (result.finish==='success') setPlayerWins(playerWins+1); 
            if (result.finish==='danger') setIaWins(iaWins+1); 
        }
    }


    const handleSelect = (pick) => {
        setResult(undefined)
        setSelectedWeapon(pick);
        setPickIA(randomPick());
    }

    return(
        <>
        <div className="row bg-secondary m-3 rounded margenr">

            <Items setSelectedWeapon={handleSelect}/>
            
            <div className="col ml-1">
                <div className="col  text-center">
                    <h3>Player Pick: </h3>
                    <img src={selectedWeapon ? `${selectedWeapon}.png` : 'unknow-pick.png'}
                        alt='selected item' className="player-item rounded"/>
                </div>
            </div>
            <div className='col  align-items-center'>
                <h1 className="row ml-5 text-center align-items-center">VS</h1>
                {result && <p className={`alert alert-${result.finish} row`}>{result.message}</p>}
            </div>
            <div className="col ml-3">
                <h3>Sheldon Pick: </h3>
                <img src={pickIA ? `${pickIA}.png` : 'unknow-pick.png'}
                                alt='selected item' className="player-item rounded"/>
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

export default PlayVsIA;