import React  from 'react';
import { useHistory } from 'react-router';

const Navigation= ({onChangeGameMode}) => {
    const history = useHistory();
    
    const goToHome = () => history.push('/');
    
    const goToVsPlayer = () => history.push('/onevsone');
  
    return (
        <nav className="navbar navbar-dark bg-info rounded p-10 justify-content-between">
            <button type="button" className="navbar-brand btn btn-outline-dark" onClick={goToHome}>Player VS Sheldon </button>
            <h1 className="text-center text-bolder text-light">
            Rock, Paper, Scissors, Lizard or Spock.
            </h1>
            <button className="navbar-brand btn btn-outline-dark" type="submit" onClick={goToVsPlayer}>Player VS Player </button>
        </nav>
      );
    }

export default Navigation; 