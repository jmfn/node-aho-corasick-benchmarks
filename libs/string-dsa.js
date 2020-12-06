const { AhoCorasick } = require('string-dsa');

exports.default = function run(keywords, text) {
  const ac = new AhoCorasick(keywords);
  const hits = ac.find(text);

  return hits.length;
};
