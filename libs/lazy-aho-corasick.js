const AhoCorasick = require('lazy-aho-corasick').default;

exports.default = function run(keywords, text) {
  const trie = new AhoCorasick(keywords);
  const hits = trie.search(text);

  return hits.length;
};
