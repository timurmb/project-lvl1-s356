// return random number from 'min' to 'max'
const getRandom = (min = 1, max = 100) => min + Math.floor(Math.random() * (max - min + 1));

export default getRandom;
