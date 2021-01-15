const dateAndTime = require('date-and-time');
function date(done) {
  const now = new Date.now();
  process.stdout.write(now);
  //done(dateAndTime.format(now, 'ddd, MMM, DD, HH:mm:ss, Z YYYY').toString());
}

module.exports = {
  date,
};
