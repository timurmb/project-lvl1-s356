import readlineSync from 'readline-sync';

const numberOfRounds = 3;

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

const isEven = number => (number % 2 === 0);

export const gameEven = () => {
  greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = askName();

  for (let round = 1; round <= numberOfRounds; round += 1) {
    const question = getRandom();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default askName;
