import { getRandom, getOperation, engine } from '..';

// const gameCalc = () => {
//   const description = 'What is the result of the expression?';
//   const questions = [];
//   const correctAnswers = [];
//   for (let round = 0; round < numberOfRounds; round += 1) {
//     const operation = getOperation();
//     const num1 = getRandom(10);
//     const num2 = getRandom(10);
//     questions.push(`${num1} ${operation.symb} ${num2}`);
//     correctAnswers.push(operation.oper(num1, num2).toString());
//   }
//   const data = { description, questions, correctAnswers };
//   engine(data);
// };

const gameCalc = () => {
  const description = 'What is the result of the expression?';
  const QAGenerator = () => {
    const operation = getOperation();
    const num1 = getRandom(10);
    const num2 = getRandom(10);
    const question = (`${num1} ${operation.symb} ${num2}`);
    const correctAnswer = operation.oper(num1, num2).toString();
    return { question, correctAnswer };
  };
  const data = { description, QAGenerator };
  engine(data);
};

export default gameCalc;
