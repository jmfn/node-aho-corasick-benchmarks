| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 997.7 ± 153.9 | 856.4 | 1365.5 | 4.36 ± 0.86 |
| `node index.js node-aho-corasick 10000` | 307.8 ± 90.9 | 231.4 | 504.4 | 1.35 ± 0.43 |
| `node index.js aho-corasick 10000` | 234.2 ± 37.8 | 188.0 | 301.4 | 1.02 ± 0.21 |
| `node index.js lazy-aho-corasick 10000` | 249.9 ± 21.5 | 216.7 | 285.2 | 1.09 ± 0.16 |
| `node index.js @tanishiking/aho-corasick 10000` | 256.7 ± 11.3 | 231.6 | 269.8 | 1.12 ± 0.15 |
| `node index.js ahocorasick 10000` | 228.6 ± 27.9 | 203.9 | 281.2 | 1.00 |
| `node index.js string-dsa 10000` | 1232.2 ± 108.4 | 1110.8 | 1422.3 | 5.39 ± 0.81 |
| `node index.js aho-corasick2 10000` | 264.8 ± 24.7 | 249.0 | 330.1 | 1.16 ± 0.18 |
