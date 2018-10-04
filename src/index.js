import readlineSync from 'readline-sync';

const numberOfRounds = 3;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

// return random number from 1 to 'max'
const getRandom = (max = 100) => {
  return Math.floor(Math.random() * max + 1);
};

const isEven = number => (number % 2 === 0);

const getOperation = () => {
  const selector = Math.floor(Math.random() * 3 + 1);
  let operation;
  let operationAsSymbol;
  switch (selector) {
    case 1:
      operation = (num1, num2) => num1 + num2;
      operationAsSymbol = '+';
      break;
    case 2:
      operation = (num1, num2) => num1 - num2;
      operationAsSymbol = '-';
      break;
    case 3:
      operation = (num1, num2) => num1 * num2;
      operationAsSymbol = '*';
      break;
    default:
      break;
  }
  return { oper: operation, symb: operationAsSymbol };
};

const check = (answer, correctAnswer, userName) => {
  if (answer !== correctAnswer) {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const congrat = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const gameEven = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = askName();

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const question = getRandom();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (check(answer, correctAnswer, userName) === false) return;
  }
  congrat(userName);
};

export const gameCalc = () => {
  greeting();
  console.log('What is the result of the expression?');
  const userName = askName();

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const operation = getOperation();
    const num1 = getRandom(10);
    const num2 = getRandom(10);
    const question = `${num1} ${operation.symb} ${num2}`;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = operation.oper(num1, num2).toString();
    if (check(answer, correctAnswer, userName) === false) return;
  }
  congrat(userName);
};

export default askName;
