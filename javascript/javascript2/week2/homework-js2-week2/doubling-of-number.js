let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter(word => word % 2 !== 0).map(number => number * 2)


console.log("The doubled numbers are", newNumbers); // [2, 6]