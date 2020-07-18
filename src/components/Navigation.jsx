import React  from 'react';

const Navigation= ({onChangeGameMode}) => {
    const goPlayerVSSheldon = () => onChangeGameMode(true);
    
    const goOneVSOne = () => onChangeGameMode(false);
    
    return (
        <nav className="navbar navbar-dark bgnav rounded">
            <div type="div" className="navbar-brand btn btn-outline-dark" onClick={goPlayerVSSheldon}>
            <img className='pvsp' src='versus.png' alt="player vs sheldon"/> </div>
            <h1 className="text-center text-light">
            Rock, Paper, Scissors, Lizard or Spock!
            </h1>
            <div className="navbar-brand btn btn-outline-dark" type="submit" onClick={goOneVSOne}>
                <img className='pvsp' src='multiplayer.svg' alt="player vs player"/> </div>
        </nav>
      );
    }

export default Navigation; 