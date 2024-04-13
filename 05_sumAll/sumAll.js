const sumAll = function(fromNum, toNum) {
    let sum = 0;
    if (fromNum > toNum){
        temp = fromNum;
        fromNum = toNum;
        toNum = temp
    }
    if (fromNum > 0 && typeof(fromNum) === 'number' && typeof(toNum) === 'number'){
        for (let i = fromNum; i <= toNum; i++){
            sum += i;
        }
    }
    else return 'ERROR';

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
