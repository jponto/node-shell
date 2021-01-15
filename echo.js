function echo(done, stringInput) {
  done(stringInput.slice(5) + '\n');
}

module.exports = {
  echo,
};
