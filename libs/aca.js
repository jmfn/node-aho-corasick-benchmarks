const aca = require('aca');

exports.default = function run(keywords, text) {
  const hits = aca.find(keywords, text);

  return Object.keys(hits.matches).length;
};
