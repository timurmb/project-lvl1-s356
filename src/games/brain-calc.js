import { numberOfRounds, getRandom, getOperation, engine } from '..';

const gameCalc = () => {
  const rules = 'What is the result of the expression?';
  const questions = [];
  const correctAnswers = [];
  for (let round = 0; round < numberOfRounds; round += 1) {
    const operation = getOperation();
    const num1 = getRandom(10);
    const num2 = getRandom(10);
    questions.push(`${num1} ${operation.symb} ${num2}`);
    correctAnswers.push(operation.oper(num1, num2).toString());
  }
  const data = { rules, questions, correctAnswers };
  engine(data);
};

export default gameCalc;
