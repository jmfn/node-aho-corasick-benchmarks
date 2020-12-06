const fastscan = require('fastscan');

exports.default = function run(keywords, text) {
  var automaton = new fastscan(keywords);
  const hits = automaton.search(text);

  return hits.length;
};
