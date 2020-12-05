// Supported libraries
const { dependencies } = require('./package.json');
const libraries = Object.keys(dependencies);

function main(library, searchStrings, keywordLength) {
  if (!keywordLength) {
    keywordLength = searchStrings;
  }

  const data = generateData(searchStrings);
  const keywords = generateKeywords(data, keywordLength);
  const text = data.join(',');

  console.log(
    `Generated ${searchStrings} search strings with a total text length of ${text.length}.`
  );
  console.log(`Generated ${keywordLength} keywords to search for.`);

  // console.log(data);
  // console.log(keywords);

  const lib = require(`./libs/${library}`).default;

  var timer = process.hrtime();
  const matches = lib(keywords, text);
  var timerEnd = process.hrtime(timer);

  console.log(
    `Time: ${Math.round(
      (timerEnd[0] * 1000000000 + timerEnd[1]) / 1000000,
      2
    )} ms, matches: ${matches}`
  );

  process.exit(0);
}

function generateData(length) {
  // seedable generator
  // https://stackoverflow.com/a/47593316
  function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
      (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)),
        (h = (h << 13) | (h >>> 19));
    return function () {
      h = Math.imul(h ^ (h >>> 16), 2246822507);
      h = Math.imul(h ^ (h >>> 13), 3266489909);
      return (h ^= h >>> 16) >>> 0;
    };
  }

  const seed = xmur3('coffee');

  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(`${seed()}`);
  }

  return data;
}

function generateKeywords(data, keywordLength = data.length) {
  return data.filter((v, i) => i < keywordLength).map((d) => d.substring(2, 9));
}

function usage() {
  console.error(
    'Usage: node index.js <library> <num-search-strings> [<num-keywords>]'
  );
  console.error(
    'Creates <num-search-strings> string values with random lengths and searches them with <num-keywords>. Omitting <num-keywords> assumes the same number of num-search-strings.'
  );
  console.error(`Supported libraries: ${libraries.join(',')}`);

  process.exit(1);
}

if (process.argv.length < 4) {
  usage();
}

if (!libraries.includes(process.argv[2])) {
  console.error(`Unknown library ${process.argv[2]}`);
  usage();
}

// run the benchmark
main(process.argv[2], +process.argv[3], +process.argv[4]);
