import { numberOfRounds, getRandom, isEven, engine } from '..';

const gameEven = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const questions = [];
  const correctAnswers = [];
  for (let round = 0; round < numberOfRounds; round += 1) {
    const question = getRandom();
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    questions.push(`${question}`);
    correctAnswers.push(correctAnswer);
  }
  const data = { rules, questions, correctAnswers };
  engine(data);
};

export default gameEven;
