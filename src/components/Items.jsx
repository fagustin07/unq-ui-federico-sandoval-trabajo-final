import React from 'react';

const Items = ({setAnItem, playerColor}) => {
    const itemClassName = `row-4 btn btn-outline-${playerColor} border-dark cursor m-3 `

    return (
        <div className="ml-3 my-3 text-center" >
            <div className={itemClassName}
                    onClick={() => setAnItem('rock')}>
                <img src='rock.png' alt='rock' />
            </div>
            
            <div className={itemClassName}
                    onClick={() => setAnItem('paper')}>
                <img src='paper.png' alt='paper' />
            </div>
            
            <div className={itemClassName}
                    onClick={() => setAnItem('scissors')}>
                <img src='scissors.png' alt='scissors'/> 
            </div>

            <div className={itemClassName}
                    onClick={() => setAnItem('lizard')}>
                <img src='lizard.png' alt='lizard' /> 
            </div>

            <div className={itemClassName}
                    onClick={() => setAnItem('spock')}>
                <img src='spock.png' alt='lizard' /> 
            </div>
        </div>
    )
}

export default Items;