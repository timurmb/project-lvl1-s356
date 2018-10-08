import engine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const number = getRandom();
  const question = number.toString();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const gamePrime = () => {
  engine(description, generateQuestionAndAnswer);
};

export default gamePrime;
