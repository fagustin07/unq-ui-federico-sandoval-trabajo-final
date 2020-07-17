import React from 'react';


const Items = ({setSelectedWeapon}) => {
    return (
        <div className="ml-3 my-3 text-center" >
            <button className="row-4 btn btn-outline-light cursor m-3"
                    onClick={() => setSelectedWeapon('rock')}>
                <img src='rock.png' alt='rock' />
            </button>
            
            <button className="row-4 btn btn-outline-light cursor m-3 "
                    onClick={() => setSelectedWeapon('paper')}>
                <img src='paper.png' alt='paper' />
            </button>
            
            <button className="row-4 btn btn-outline-light cursor m-3 "
                    onClick={() => setSelectedWeapon('scissors')}>
                <img src='scissors.png' alt='scissors'/> 
            </button>

            <button className="row-4 btn btn-outline-light cursor m-3 "
                    onClick={() => setSelectedWeapon('lizard')}>
                <img src='lizard.png' alt='lizard' /> 
            </button>

            <button className="row-4 btn btn-outline-light cursor m-3 "
                    onClick={() => setSelectedWeapon('spock')}>
                <img src='spock.png' alt='spock' /> 
            </button>
        </div>
    )
}

export default Items;