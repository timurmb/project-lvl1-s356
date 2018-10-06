import engine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let divisor = 2; divisor < number; divisor += 1) {
    if (number % divisor === 0) return false;
  }
  return true;
};

const gameProgression = () => {
  const generateQuestionAndAnswer = () => {
    const number = getRandom();
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';
    return { q: question, a: correctAnswer };
  };
  engine(description, generateQuestionAndAnswer);
};

export default gameProgression;
