const AhoCorasick = require('aho-corasick2');

exports.default = function run(keywords, text) {
  var ac = new AhoCorasick();
  keywords.forEach((k) => ac.add(k));
  ac.build_fail();

  const results = ac.search(text);

  return Object.keys(results.matches).length;
};
