const removeFromArray = function(array, ...itemsToRemove) {
    for (let itemToRemove of itemsToRemove){
        let index = array.indexOf(itemToRemove)
        while (array.includes(itemToRemove)){
            array.splice(index, 1);
        }
    }
    return array;
};


//Another way to do this:
/* 
const removeFromArray = function (array, ...args) {
  const newArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  return newArray;
}; 
*/

// Do not edit below this line
module.exports = removeFromArray;
