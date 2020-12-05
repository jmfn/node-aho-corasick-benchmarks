const AhoCorasick = require('aho-corasick-node');

exports.default = function run(keywords, text) {
  // build AhoCorasick
  const builder = AhoCorasick.builder();
  keywords.forEach((k) => builder.add(k));
  const ac = builder.build();

  // match
  const hits = ac.match(text); // ['b', 'ba', 'nan']

  // console.log('hits, ' + hits);

  return hits.length;
};
