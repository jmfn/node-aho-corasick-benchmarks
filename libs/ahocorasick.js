const AhoCorasick = require('ahocorasick');

exports.default = function run(keywords, text) {
  const ac = new AhoCorasick(keywords);
  const hits = ac.search(text);

  return hits.length;
};
