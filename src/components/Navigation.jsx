import React  from 'react';

const Navigation= ({onChangeGameMode}) => {
    const goPlayerVSSheldon = () => onChangeGameMode(true);
    
    const goOneVSOne = () => onChangeGameMode(false);
    
    return (
        <nav className="navbar navbar-dark bg-info rounded">
            <button type="button" className="navbar-brand btn btn-outline-dark" onClick={goPlayerVSSheldon}>
            <img className='pvsp' src='versus.png' alt="player vs sheldon"/> </button>
            <h1 className="text-center text-light">
            Rock, Paper, Scissors, Lizard or Spock!
            </h1>
            <button className="navbar-brand btn btn-outline-dark" type="submit" onClick={goOneVSOne}>
                <img className='pvsp' src='multiplayer.svg' alt="player vs player"/> </button>
        </nav>
      );
    }

export default Navigation; 