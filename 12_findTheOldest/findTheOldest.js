const findTheOldest = function(people) {
    // let oldest = 0;
    // people.forEach(person => {
    //     age = person['yearOfDeath'] - person['yearOfBirth'];
    //     if (oldest < age){
    //         oldest = age;
    //     }
    // });
    let a = people.reduce(
        (prevPerson, currentperson) => {
            age = currentperson['yearOfDeath'] - currentperson['yearOfBirth'];  
        },
        0
    );
};

// Do not edit below this line
module.exports = findTheOldest;
