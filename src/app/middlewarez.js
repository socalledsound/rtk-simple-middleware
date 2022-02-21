
const middlewarez = store => {
    return next => action => {
        console.log(action);

        switch(action.type){
            case 'GOLDMINE' :
                console.log('you hit the jackpot!!!');
                break; 
            default:
                break;
        }

        next(action);
    }
}

export default middlewarez