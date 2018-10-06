import { numberOfRounds, getRandom, engine } from '..';

const gameGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const questions = [];
  const correctAnswers = [];
  for (let round = 0; round < numberOfRounds; round += 1) {
    const num1 = getRandom();
    const num2 = getRandom();

    let gcd = 1;
    let divisor = 1;
    while (divisor <= num1 && divisor <= num2) {
      if (num1 % divisor === 0 && num2 % divisor === 0) gcd = divisor;
      divisor += 1;
    }

    questions.push(`${num1} ${num2}`);
    correctAnswers.push(gcd.toString());
  }
  const data = { rules, questions, correctAnswers };
  engine(data);
};

export default gameGcd;
