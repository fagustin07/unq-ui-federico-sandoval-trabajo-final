
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
            if(isRock(anotherItem)) result.message =`The rocks crashes! It's an empty :|`;
            
            if(isScissors(anotherItem)) {
                result.message=`Rock destroys scissors! ${fstPlayer} wins :)`;
                result.finish='success'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper wrap the rock! ${sndPlayer} wins :(`;
                result.finish='danger';
            };

            if(isLizard(anotherItem)) {
                result.message=`Rock destroys the lizard! ${fstPlayer} wins :)`;
                result.finish='success';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock vaporized the rock! ${sndPlayer} wins :(`;
                result.finish='danger';
            };
        break;
        
        case('scissors') :
            if(isRock(anotherItem)){
                result.message =`Rock destroys scissors! ${sndPlayer} wins :(`;
                result.finish='danger'
            };
                
            if(isScissors(anotherItem)) result.message=`The scissors crashes! It's an empty :|`;;

            if(isPaper(anotherItem)) {
                result.message=`Scissors cuts paper! ${fstPlayer} wins :)`;
                result.finish='success';
            };

            if(isLizard(anotherItem)) {
                result.message=`Scissors beheads lizard! ${fstPlayer} wins :)`;
                result.finish='success';
            };

            if(isSpock(anotherItem)) {
                result.message=`Spock breaks scissors! ${sndPlayer} wins :(`;
                result.finish='danger';
            };
        break;

        case('paper') :
            if(isRock(anotherItem)){ 
                result.message =`Paper cover the rock! ${fstPlayer} wins :)`;
                result.finish = 'success';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors cut to paper! ${sndPlayer} wins :(`;
                result.finish='danger'
            };

            if(isPaper(anotherItem)) result.message=`The papers crashes! It's an empty :|`;

            if(isLizard(anotherItem)) {
                result.message=`Lizard eats paper! ${sndPlayer} wins :(`;
                result.finish='danger';
            };

            if(isSpock(anotherItem)) {
                result.message=`Paper disavows Spock! ${fstPlayer} wins :)`;
                result.finish='success';
            };
        break;
        
        case('lizard') :
            if(isRock(anotherItem)) {
                result.message =`Stone destroys Lizard! ${sndPlayer} wins :(`;
                result.finish='danger';
            }
            
            if(isScissors(anotherItem)) {
                result.message=`Scissors beheads lizard! ${sndPlayer} wins :(`;
                result.finish='danger'
            };

            if(isPaper(anotherItem)) {
                result.message=`Lizard eats paper! ${fstPlayer} wins :)`;
                result.finish='success';
            };

            if(isLizard(anotherItem)) result.message=`The lizards crashes! It's an empty :|`;

            if(isSpock(anotherItem)) {
                result.message=`Lizard Poisons Spock! ${fstPlayer} wins :)`;
                result.finish='success';
            };
        break;
        
        case('spock') :
            if(isRock(anotherItem)){
                result.message =`Spock vaporized the rock! ${fstPlayer} wins :)`;
                result.finish = 'success';
            };
            
            if(isScissors(anotherItem)) {
                result.message=`Spock breaks scissors! ${fstPlayer} wins :)`;
                result.finish='success'
            };

            if(isPaper(anotherItem)) {
                result.message=`Paper disavows Spock! ${sndPlayer} wins :(`;
                result.finish='danger';
            };

            if(isLizard(anotherItem)) {
                result.message=`Lizard Poisons Spock! ${sndPlayer} wins :(`;
                result.finish='danger';
            };

            if(isSpock(anotherItem)) result.message=`Spocks crashes! It's an empty :|`;
        break;
        default:;    
    }
    return result;
}

export default {
    startFight
};