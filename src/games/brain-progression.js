import engine from '..';
import getRandom from '../utils';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const getProgression = () => {
  let element = getRandom(10);
  const step = getRandom(10);
  const progression = [element];
  for (let i = 1; i < progressionLength; i += 1) {
    element += step;
    progression.push(element);
  }
  return progression;
};

const gameProgression = () => {
  const generateQuestionAndAnswer = () => {
    const arr = getProgression();
    const elementForReplace = getRandom(progressionLength) - 1;
    const correctAnswer = arr[elementForReplace];

    arr.splice(elementForReplace, 1, '..');
    const question = arr.join(' ');

    return { q: question, a: correctAnswer.toString() };
  };
  engine(description, generateQuestionAndAnswer);
};

export default gameProgression;
