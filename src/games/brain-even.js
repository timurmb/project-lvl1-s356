import engine from '..';
import getRandom from '../utils';

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = number => (number % 2 === 0);

const gameEven = () => {
  const generateQuestionAndAnswer = () => {
    const question = getRandom();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question: question.toString(), correctAnswer };
  };
  engine(description, generateQuestionAndAnswer);
};

export default gameEven;
