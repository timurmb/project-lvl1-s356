import engine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const generateQuestionAndAnswer = () => {
  const question = getRandom();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question: question.toString(), correctAnswer };
};

const gameEven = () => {
  engine(description, generateQuestionAndAnswer);
};

export default gameEven;
