import engine from '..';
import getRandom from '../utils';

const description = 'What is the result of the expression?';

const getOperation = () => {
  const selector = getRandom(3);
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

const gameCalc = () => {
  const generateQuestionAndAnswer = () => {
    const operation = getOperation();
    const num1 = getRandom(10);
    const num2 = getRandom(10);
    const question = (`${num1} ${operation.symb} ${num2}`);
    const correctAnswer = operation.oper(num1, num2).toString();
    return { q: question, a: correctAnswer };
  };
  engine(description, generateQuestionAndAnswer);
};

export default gameCalc;
