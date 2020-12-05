| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 898.8 ± 37.0 | 854.6 | 965.6 | 4.45 ± 0.36 |
| `node index.js node-aho-corasick 10000` | 208.7 ± 13.2 | 195.1 | 238.3 | 1.03 ± 0.10 |
| `node index.js aho-corasick 10000` | 202.2 ± 14.1 | 190.9 | 233.7 | 1.00 |
| `node index.js lazy-aho-corasick 10000` | 227.1 ± 19.2 | 217.6 | 290.5 | 1.12 ± 0.12 |
