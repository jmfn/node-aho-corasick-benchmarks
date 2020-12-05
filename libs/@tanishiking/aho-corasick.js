const AhoCorasick = require('@tanishiking/aho-corasick');

exports.default = function run(keywords, text) {
  const trie = new AhoCorasick.Trie(keywords);
  const hits = trie.parseText(text);

  return hits.length;
};
