import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

const engine = (description = '', generateQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = askName();
  for (let round = 0; round < numberOfRounds; round += 1) {
    const questionAndAnswer = generateQuestionAndAnswer();

    console.log(`Question: ${questionAndAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== questionAndAnswer.correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${questionAndAnswer.correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
