import engine from '..';
import getRandom from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let gcd = 1;
  let divisor = 1;
  while (divisor <= num1 && divisor <= num2) {
    if (num1 % divisor === 0 && num2 % divisor === 0) gcd = divisor;
    divisor += 1;
  }
  return gcd;
};

const gameGcd = () => {
  const generateQuestionAndAnswer = () => {
    const num1 = getRandom();
    const num2 = getRandom();
    const question = `${num1} ${num2}`;
    const correctAnswer = findGCD(num1, num2).toString();
    return { q: question, a: correctAnswer };
  };
  engine(description, generateQuestionAndAnswer);
};

export default gameGcd;
