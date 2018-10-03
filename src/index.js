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

export const gameEven = (userName) => {
  const lossMessage = `Let's try again, ${userName}!`;
  let counter = 1;
  while (counter <= 3) {
    const number = getRandom();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (number % 2 === 0 && answer !== 'yes') {
      console.log(`${answer} is wrong answer ;(. Correct answer was "yes".`);
      console.log(lossMessage);
      return;
    }
    if (number % 2 === 1 && answer !== 'no') {
      console.log(`${answer} is wrong answer ;(. Correct answer was "no".`);
      console.log(lossMessage);
      return;
    }
    console.log('Correct!');
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default askName;
