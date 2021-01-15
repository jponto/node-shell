const fs = require('fs');
function cat(done, fileName) {
	fs.readFile(fileName, (err, data) => {
		if (err) throw err;
		done(data);
	});
}

module.exports = {
	cat
};
