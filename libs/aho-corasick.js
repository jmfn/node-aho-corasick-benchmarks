const AhoCorasick = require('aho-corasick');

exports.default = function run(keywords, text) {
  const ac = new AhoCorasick();
  keywords.forEach((k) => ac.add(k));
  ac.build_fail();

  // match
  const hits = [];

  ac.search(text, function (found_word, data) {
    hits.push(found_word);
  });

  return hits.length;
};
