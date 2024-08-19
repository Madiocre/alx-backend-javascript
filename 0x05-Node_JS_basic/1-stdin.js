const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // TODO: Log the name in a database
  console.log(`Your name is:  ${name}`);

  if (!input.isTTY) {
    console.log('This important software is now closing');
  }
  rl.close()
});