
const isRock     = (item) => item==='rock';
const isScissors = (item) => item==='scissors';
const isPaper    = (item) => item==='paper';
const isLizard   = (item) => item==='lizard';
const isSpock    = (item) => item==='spock';

const startFight = (playerItem, anotherItem, gameMode) =>{
    const result = {finish: 'warning', message: ''};
    const fstPlayer = gameMode ? 'Player' : 'Player 1'
    const sndPlayer = gameMode ? 'Sheldon' : 'Player 2'
    switch (playerItem){
        case('rock') :
            if(isRock(anotherItem)) result.message =`The rocks crashes, It's a tie...`;
            
            if(isScissors(anotherItem)) {
                result.message=`Rock destroys Scissors, ${fstPlayer} won!`;
                result.finish='success'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper wrap the Rock, ${sndPlayer} won!`;
                result.finish='danger';
            };

            if(isLizard(anotherItem)) {
                result.message=`Rock destroys the Lizard, ${fstPlayer} won!`;
                result.finish='success';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock vaporized the Rock, ${sndPlayer} won!`;
                result.finish='danger';
            };
        break;
        
        case('scissors') :
            if(isRock(anotherItem)){
                result.message =`Rock destroys Scissors, ${sndPlayer} won!`;
                result.finish='danger'
            };
                
            if(isScissors(anotherItem)) result.message=`The Scissors crashes, It's a tie...`;;

            if(isPaper(anotherItem)) {
                result.message=`Scissors cuts Paper, ${fstPlayer} won!`;
                result.finish='success';
            };

            if(isLizard(anotherItem)) {
                result.message=`Scissors beheads Lizard, ${fstPlayer} won!`;
                result.finish='success';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock breaks Scissors, ${sndPlayer} won!`;
                result.finish='danger';
            };
        break;

        case('paper') :
            if(isRock(anotherItem)){ 
                result.message =`Paper cover the Rock, ${fstPlayer} won!`;
                result.finish = 'success';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors cut to Paper, ${sndPlayer} won!`;
                result.finish='danger'
            };

            if(isPaper(anotherItem)) result.message=`The Papers crashes, It's a tie...`;

            if(isLizard(anotherItem)) {
                result.message=`Lizard eats Paper, ${sndPlayer} won!`;
                result.finish='danger';
            };

            if(isSpock(anotherItem)) {
                result.message=`Paper disavows Spock, ${fstPlayer} won!`;
                result.finish='success';
            };
        break;
        
        case('lizard') :
            if(isRock(anotherItem)) {
                result.message =`Stone destroys Lizard, ${sndPlayer} won!`;
                result.finish='danger';
            }
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors beheads Lizard, ${sndPlayer} won!`;
                result.finish='danger'
            };

            if(isPaper(anotherItem)) {
                result.message=`Lizard eats Paper, ${fstPlayer} won!`;
                result.finish='success';
            };

            if(isLizard(anotherItem)) result.message=`The Lizards crashes, It's a tie...`;

            if(isSpock(anotherItem)) {
                result.message=`Lizard Poisons Spock, ${fstPlayer} won!`;
                result.finish='success';
            };
        break;
        
        case('spock') :
            if(isRock(anotherItem)){
                result.message =`Spock vaporized the rock, ${fstPlayer} won!`;
                result.finish = 'success';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Spock breaks scissors, ${fstPlayer} won!`;
                result.finish='success'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper disavows Spock, ${sndPlayer} won!`;
                result.finish='danger';
            };

            if(isLizard(anotherItem)) {
                result.message=`Lizard Poisons Spock, ${sndPlayer} won!`;
                result.finish='danger';
            };

            if(isSpock(anotherItem)) result.message=`Spocks crashes, It's a tie...`;
        break;
        default:;    
    }
    return result;
}

export default {
    startFight
};