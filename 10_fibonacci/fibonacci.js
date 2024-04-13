const fibonacci = function(count) {
    if (typeof count !== "number") count = parseInt(count)

    if (count == 1) return 1
    else if (count < 0) return 'OOPS'

    let currentNum = 0, secondPrev = 0, firstPrev = 1;
    for (let i = 1; i < count; i++){
        currentNum = firstPrev + secondPrev;
        secondPrev = firstPrev;
        firstPrev = currentNum;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
