const fs = require('fs');

function ls(done) {
	fs.readdir('./', 'utf8', (err, files) => {
		if (err) {
			throw err;
		} else {
			const displayedFiles = files.filter((file) => file.charAt(0) !== '.');
			done(displayedFiles.join('\n'));
		}
	});
}

module.exports = {
	ls
};
