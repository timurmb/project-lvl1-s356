import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
};

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
  return userName;
};

// return random number 1-100
const getRandom = () => Math.floor(Math.random() * 100 + 1);

export const gameEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = askName();

  const lossMessage = `Let's try again, ${userName}!`;
  const numberOfRounds = 3;
  for (let round = 1; round <= numberOfRounds; round += 1) {
    const question = getRandom();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer;
    if (question % 2 === 0) correctAnswer = 'yes';
    if (question % 2 === 1) correctAnswer = 'no';
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(lossMessage);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default askName;
