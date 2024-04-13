const palindromes = function (string) {
    let cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reverseString = cleanString.split("").reverse().join("");
    return (cleanString === reverseString);
};

// Do not edit below this line
module.exports = palindromes;
