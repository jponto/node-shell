const { pwd } = require('./pwd');
const { cat } = require('./cat');
const { ls } = require('./ls');
const curl = require('./curl');
const { date } = require('./date');
const { echo } = require('./echo');
process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  const targ = data.toString().trim().split(' ')[1];

  // process.stdout.write('You typed: ' + cmd);
  if (cmd === 'pwd') {
    pwd(done);
  } else if (cmd === 'ls') {
    ls(done);
  } else if (cmd === 'cat') {
    cat(done, targ);
  } else if (cmd === 'curl') {
    curl(done, targ);
  } else if (cmd === 'date') {
    date(done);
  } else if (cmd === 'echo') {
    echo(done, data.toString().trim());
  }
});

const done = (output) => {
  process.stdout.write(output);
  process.stdout.write('prompt > ');
};

module.exports = { done };
