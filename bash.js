const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

// Output a prompt
process.stdout.write('prompt > ');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data, arg) => {
  const cmd = data.toString().trim().split(' '); // remove the newline

  const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');
  };

  if (cmd[0] === 'pwd') {
    pwd(done);
  } else if (cmd[0] === 'ls') {
    ls(done);
  } else if (cmd[0] === 'cat') {
    cat(done, cmd[1]);
  } else if (cmd[0] === 'curl') {
    curl(done, cmd[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
