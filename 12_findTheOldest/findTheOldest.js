const findTheOldest = function(people) {
    const ageOfPeople = people.map((person) => {
        if (!person.yearOfDeath){
            const date = new Date()
            person.yearOfDeath = date.getFullYear()
        }
        return person.yearOfDeath - person.yearOfBirth
    });
    const maxAge = Math.max(...ageOfPeople);
    const indexOfOldestPerson = ageOfPeople.indexOf(maxAge)
    return people[indexOfOldestPerson];
};

// Do not edit below this line
module.exports = findTheOldest;
