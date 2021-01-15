const { currentDir } = require('./pwd');
const { cat } = require('./cat');
const { ls } = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim().split(' ')[0];
  const targ = data.toString().trim().split(' ')[1];

  // process.stdout.write('You typed: ' + cmd);
  if (cmd === 'pwd') {
    currentDir();
  } else if (cmd === 'ls') {
    ls();
  } else if (cmd === 'cat') {
    cat(targ);
  }
});
