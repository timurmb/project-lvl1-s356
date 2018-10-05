import { getRandom, isEven, engine } from '..';

const gameEven = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const QAGenerator = () => {
    const question = getRandom();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return { question: question.toString(), correctAnswer };
  };
  const data = { description, QAGenerator };
  engine(data);
};

export default gameEven;
