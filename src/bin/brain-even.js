#!/usr/bin/env node
import askName, { greeting, gameEven } from '..';

greeting();
console.log('Answer "yes" if number even otherwise answer "no".');
const userName = askName();
gameEven(userName);
