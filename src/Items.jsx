import React from 'react';


const Items = ({setSelectedWeapon}) => {
    return (
        <div className="col-1 ml-3 my-3" >
            <button className="btn btn-outline-light cursor a"
                    onClick={() => setSelectedWeapon('rock')}>
                <img src='rock.png' alt='scissors' />
            </button>
            
            <button className="btn btn-outline-light cursor mt-3 "
                    onClick={() => setSelectedWeapon('paper')}>
                <img src='paper.png' alt='pap' />
            </button>
            
            <button className="btn btn-outline-light cursor mt-3 "
                    onClick={() => setSelectedWeapon('scissors')}>
                <img src='scissors.png' alt='scissors'/> 
            </button>

            <button className="btn btn-outline-light cursor mt-3 "
                    onClick={() => setSelectedWeapon('lizard')}>
                <img src='lizard.png' alt='lizard' /> 
            </button>

            <button className="btn btn-outline-light cursor mt-3 "
                    onClick={() => setSelectedWeapon('spock')}>
                <img src='spock.png' alt='spock' /> 
            </button>
        </div>
    )
}

export default Items;