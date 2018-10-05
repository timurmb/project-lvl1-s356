import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

// return random number from 1 to 'max'
export const getRandom = (max = 100) => Math.floor(Math.random() * max + 1);

export const isEven = number => (number % 2 === 0);

export const getOperation = () => {
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

export const engine = (data) => {
  greeting();
  console.log(data.description);
  const userName = askName();
  for (let round = 0; round < numberOfRounds; round += 1) {
    const QA = data.QAGenerator();
    const question = QA.question;
    const correctAnswer = QA.correctAnswer;
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (check(answer, correctAnswer, userName) === false) return;
  }
  congrat(userName);
};

export default askName;
