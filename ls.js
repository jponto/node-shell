const fs = require('fs');

function ls() {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      const displayedFiles = files.filter((file) => file.charAt(0) !== '.');
      process.stdout.write(displayedFiles.join('\n'));
      process.stdout.write('prompt  >');
    }
  });
}

module.exports = {
  ls,
};
