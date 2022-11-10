let userData = {
  name: null,
  todos: [],
};

const processNameCommand = (command) => {
  const name = command.replace('Hello my name is', '').trim();
  if (name.length > 0) {
    userData.name = name;
    return `nice to meet you ${name}`;
  }
  return 'Invalid input of name.';
};

const processAddToDoCommand = (command) => {
  let replacedAdd = command.replace('Add', '').trim();
  const toDo = replacedAdd.replace('to my todo', '').trim();
  if (toDo.length > 0) {
    userData.todos.push(toDo);
    return `${toDo} added to your todo`;
  }
  return 'Invalid input of to do list.';
};

const processRemoveToDoCommand = (command) => {
  let replacedRemove = command.replace('Remove', '').trim();
  const toDo = replacedRemove.replace('from my todo', '').trim();
  if (toDo.length> 0) {
    userData.todos = userData.todos.filter((todo) => {
      return todo !== toDo;  
  });
  return `Removed ${toDo} from your todo`;
  }  
   return 'Invalid input of to do list.'
};

const setATimer = (command) => {
  let replacedSet = command.replace('Set a timer for', '').trim();
  let minutesString = replacedSet.replace('minutes', '').trim();
  const minutes = parseFloat(minutesString)
  setTimeout(() => console.log("Timer done"), minutes * 60 * 1000);
  return `Timer is set for ${minutes} minutes`
}

const doMath = (command) => {
  let replacedWhatIs = command.replace('What is', '').trim();
  const symbol = replacedWhatIs.split(' ')[1];
  const number1 = parseInt(replacedWhatIs.split(symbol)[0]);
  const number2 = parseInt(replacedWhatIs.split(symbol)[1]);
  const symbolsArray = ['+', '-', '*', '/', '%']
    const isAllowedSymbol = symbolsArray.some((allowedSymbol) => {
      return allowedSymbol === symbol
    })
  if (!isNaN(number1) && !isNaN(number2) && isAllowedSymbol === true) {
    const result = mathOperation(symbol, number1, number2)
    return `Your result is ${result}`
  } else {
    return 'Invalid input of numbers or invalid symbol.'
  }
}

const mathOperation = (symbol, number1, number2) => {
  if (symbol === '+') {
    return number1 + number2
  } 
  if (symbol === '-') {
    return number1 - number2
  } 
  if (symbol === '*') {
    return number1 * number2
  } 
  if (symbol === '/'){
    return number1 / number2
  }
  if (symbol === '%'){
    return number1 % number2
  }
}

const getReply = (command) => {
  if (command.includes('Hello my name is')) {
    return processNameCommand(command);
  } else if (command === 'What is my name') {
    if (userData.name !== null) {
      return `Your name is ${userData.name}`;
    } else {
      return `You haven't mentioned your name.`;
    }
  } else if (command.includes('Add') && command.includes('to my todo')) {
    if (userData.todos !== null) {
      return processAddToDoCommand(command);
    }
  } else if (command.includes('Remove') && command.includes('from my todo')) {
      return processRemoveToDoCommand(command);
  } else if ((command.includes('What is on my todo?'))) {
      return `You have ${userData.todos.length} plans in your list. You have ${userData.todos.join(', ')} in your to do list.`
  } else if ((command.includes('What day is it today?'))) {
    return `Today is ${new Date()}`
} else if ((command.includes('Set a timer for')) && command.includes('minutes')) {
  return setATimer(command)
} else if ((command.includes('What is'))) {
  return doMath(command)
}
  return 'Invalid command 😉🤙';
};


console.log({ userData });
console.log(getReply(`Hello my name is Benjamin`));

console.log(getReply('What is my name'));

console.log(getReply('Add fishing to my todo'));
console.log(getReply('Add  to my todo'));
console.log(getReply('Add styding to my todo'));
console.log(getReply('Add singing to my todo'));
console.log(getReply('Add shopping to my todo'));

console.log(getReply('Remove singing from my todo'));

console.log(getReply('What is on my todo?'));

console.log(getReply('What day is it today?'));

console.log(getReply('Set a timer for 5 minutes'));

console.log(getReply('What is 3 -- 3'));
console.log(getReply('What is o * 3'));
console.log(getReply('What is 3 * 3'));