/* 1 */
const firstFunction = () => {
  console.log('First');
};

const secondFunction = () => {
  console.log('Second');
};

const thirdFunction = () => {
  console.log('Third');
};

const functionsAsAValue = [];
functionsAsAValue.push(firstFunction)
functionsAsAValue.push(secondFunction)
functionsAsAValue.push(thirdFunction)

functionsAsAValue.forEach((functionAsAValue) => {
  functionAsAValue()
});


/* 2 */
function normalFunction() {
  console.log('hello');
}

const functionAsAConst = () => {
  console.log('hello');
}

/* 3 */
const exampleFunction = () => {
  console.log('hello')
}

const objThatHasFunction = {
  thisIsFunction: exampleFunction
}

/* objThatHasFunction.thisIsFunction() */