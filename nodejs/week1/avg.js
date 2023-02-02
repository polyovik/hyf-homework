const input = process.argv.slice(2);

const getAvg = (arguments) => {

  if (arguments.length >= 2) {
    const filteredArguments = arguments.filter(argument => !isNaN(argument));

    if (filteredArguments.length >= 2) {
      const total = filteredArguments.map(argument => parseFloat(argument)).reduce((acc, c) => acc + c, 0);
      return total / filteredArguments.length;
    }
    console.log("Please provide at least two valid numbers.");
  } else {
    console.log("Please provide at least two numbers.");
  }
};

const average = getAvg(input);
console.log(average);


