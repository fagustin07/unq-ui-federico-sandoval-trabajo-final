
const isRock     = (item) => item==='rock';
const isScissors = (item) => item==='scissors';
const isPaper    = (item) => item==='paper';
const isLizard   = (item) => item==='lizard';
const isSpock    = (item) => item==='spock';

const startFight = (playerItem, sheldonItem) =>{
    const result = {finish: 'warning', message: ''};

    switch (playerItem){
        case('rock') :
            if(isRock(sheldonItem)) result.message =`The rocks crashes! It's an empty :|`;
            
            if(isScissors(sheldonItem)) {
                result.message=`Rock destroys scissors! Player wins :)`;
                result.finish='success'
            };

            if(isPaper(sheldonItem)) {
                result.message=`Paper wrap the rock! Sheldon wins :(`;
                result.finish='danger';
            };

            if(isLizard(sheldonItem)) {
                result.message=`Rock crushes the lizard! Player wins :)`;
                result.finish='success';
            };

            if(isSpock(sheldonItem)) {
                result.message=`Spock vaporized the rock! Sheldon wins :(`;
                result.finish='danger';
            };
        break;
        
        case('scissors') :
            if(isRock(sheldonItem)){
                result.message =`Rock destroys scissors! Sheldon wins :(`;
                result.finish='danger'
            };
                
            if(isScissors(sheldonItem)) result.message=`The scissors crashes! It's an empty :|`;;

            if(isPaper(sheldonItem)) {
                result.message=`Scissors cuts paper! Player wins :)`;
                result.finish='success';
            };

            if(isLizard(sheldonItem)) {
                result.message=`Scissors beheads lizard! Player wins :)`;
                result.finish='success';
            };

            if(isSpock(sheldonItem)) {
                result.message=`Spock breaks scissors! Sheldon wins :(`;
                result.finish='danger';
            };
        break;

        case('paper') :
            if(isRock(sheldonItem)){ 
                result.message =`Paper cover the rock! Player wins :)`;
                result.finish = 'success';
            };
            
            if(isScissors(sheldonItem)) {
                result.message=`Scissors cut to paper! Sheldon wins :(`;
                result.finish='danger'
            };

            if(isPaper(sheldonItem)) result.message=`The papers crashes! It's an empty :|`;

            if(isLizard(sheldonItem)) {
                result.message=`Lizard eats paper! Sheldon wins :(`;
                result.finish='danger';
            };

            if(isSpock(sheldonItem)) {
                result.message=`Paper disavows Spock! Player wins :)`;
                result.finish='success';
            };
        break;
        
        case('lizard') :
            if(isRock(sheldonItem)) {
                result.message =`Stone destroys Lizard! Sheldon wins :(`;
                result.finish='danger';
            }
            
            if(isScissors(sheldonItem)) {
                result.message=`Scissors beheads lizard! Sheldon wins :(`;
                result.finish='danger'
            };

            if(isPaper(sheldonItem)) {
                result.message=`Lizard eats paper! Player wins :)`;
                result.finish='success';
            };

            if(isLizard(sheldonItem)) result.message=`The lizards crashes! It's an empty :|`;

            if(isSpock(sheldonItem)) {
                result.message=`Lizard Poisons Spock! Player wins :)`;
                result.finish='success';
            };
        break;
        
        case('spock') :
            if(isRock(sheldonItem)){
                result.message =`Spock vaporized the rock! Player wins :)`;
                result.finish = 'success';
            };
            
            if(isScissors(sheldonItem)) {
                result.message=`Spock breaks scissors! Player wins :)`;
                result.finish='success'
            };

            if(isPaper(sheldonItem)) {
                result.message=`Paper disavows Spock! Sheldon wins :(`;
                result.finish='danger';
            };

            if(isLizard(sheldonItem)) {
                result.message=`Lizard Poisons Spock! Sheldon wins :(`;
                result.finish='danger';
            };

            if(isSpock(sheldonItem)) result.message=`Spocks crashes! It's an empty :|`;
        break;
        default:;    
    }
    return result;
}

export default {
    startFight
};