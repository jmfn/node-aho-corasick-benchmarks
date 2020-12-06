const AhoCorasick = require('aho-corasick-search');

exports.default = function run(keywords, text) {
  const ac = new AhoCorasick();
  keywords.forEach((k) => ac.add(k));
  ac.build();
  const res = ac.search(text);
  return res.length;
};
