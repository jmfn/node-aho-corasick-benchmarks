| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 917.4 ± 41.2 | 867.4 | 991.7 | 4.36 ± 0.40 |
| `node index.js node-aho-corasick 10000` | 217.1 ± 19.1 | 195.9 | 250.8 | 1.03 ± 0.12 |
| `node index.js aho-corasick 10000` | 210.6 ± 16.6 | 197.7 | 243.9 | 1.00 |
| `node index.js lazy-aho-corasick 10000` | 230.2 ± 13.4 | 217.2 | 269.0 | 1.09 ± 0.11 |
| `node index.js @tanishiking/aho-corasick 10000` | 265.5 ± 42.1 | 224.1 | 369.9 | 1.26 ± 0.22 |
