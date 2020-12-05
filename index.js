const libraries = ['aho-corasick-node'];

function main(library, length) {
  const data = generateData(length);
  const keywords = generateMatches(data);
  const text = data.join(',');

  // console.log(data);
  // console.log(keywords);

  const lib = require(`./libs/${library}`).default;

  var timer = process.hrtime();
  const result = lib(keywords, text);
  var timerEnd = process.hrtime(timer);

  console.log(
    `Time: ${Math.round(
      (timerEnd[0] * 1000000000 + timerEnd[1]) / 1000000,
      2
    )} ms, result: ${result}`
  );
}

function generateData(length) {
  const data = [];
  for (let i = 0; i < length; i++) {
    data.push(`${Math.round(Math.random() * 10000000000, 0)}`);
  }

  return data;
}

function generateMatches(data) {
  return data.map((d) => d.substring(2, 9));
}

function usage() {
  console.error('Usage: node index.js <library> <data-length>');
  console.error(`Supported libraries: ${libraries.join(',')}`);

  process.exit(1);
}

if (process.argv.length !== 4) {
  usage();
}

if (!libraries.includes(process.argv[2])) {
  console.error(`Unknown library ${process.argv[2]}`);
  usage();
}

// run the benchmark
main(process.argv[2], +process.argv[3]);
