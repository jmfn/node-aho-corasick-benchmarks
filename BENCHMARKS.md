| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 931.6 ± 92.6 | 858.0 | 1174.0 | 4.63 ± 0.50 |
| `node index.js node-aho-corasick 10000` | 221.7 ± 29.7 | 197.9 | 294.3 | 1.10 ± 0.15 |
| `node index.js aho-corasick 10000` | 201.1 ± 8.5 | 195.5 | 227.5 | 1.00 |
| `node index.js lazy-aho-corasick 10000` | 227.7 ± 12.2 | 219.3 | 265.3 | 1.13 ± 0.08 |
| `node index.js @tanishiking/aho-corasick 10000` | 237.2 ± 19.1 | 218.4 | 280.9 | 1.18 ± 0.11 |
| `node index.js ahocorasick 10000` | 208.5 ± 12.6 | 197.9 | 246.1 | 1.04 ± 0.08 |
