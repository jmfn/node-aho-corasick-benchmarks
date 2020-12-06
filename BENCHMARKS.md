| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 928.3 ± 40.9 | 879.8 | 1004.4 | 4.58 ± 0.30 |
| `node index.js node-aho-corasick 10000` | 202.6 ± 9.8 | 188.5 | 219.8 | 1.00 |
| `node index.js aho-corasick 10000` | 212.3 ± 27.7 | 183.4 | 264.5 | 1.05 ± 0.15 |
| `node index.js lazy-aho-corasick 10000` | 226.9 ± 14.7 | 211.2 | 254.4 | 1.12 ± 0.09 |
| `node index.js @tanishiking/aho-corasick 10000` | 230.3 ± 16.5 | 212.6 | 265.1 | 1.14 ± 0.10 |
| `node index.js ahocorasick 10000` | 226.8 ± 44.5 | 192.1 | 347.7 | 1.12 ± 0.23 |
| `node index.js string-dsa 10000` | 1160.2 ± 43.1 | 1102.7 | 1221.1 | 5.73 ± 0.35 |
