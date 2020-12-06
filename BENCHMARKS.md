| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 915.2 ± 42.4 | 868.4 | 1011.7 | 4.48 ± 0.32 |
| `node index.js node-aho-corasick 10000` | 204.2 ± 11.1 | 192.6 | 237.2 | 1.00 |
| `node index.js aho-corasick 10000` | 207.6 ± 15.7 | 188.9 | 240.2 | 1.02 ± 0.09 |
| `node index.js lazy-aho-corasick 10000` | 228.3 ± 9.7 | 215.7 | 254.7 | 1.12 ± 0.08 |
| `node index.js @tanishiking/aho-corasick 10000` | 245.8 ± 21.4 | 222.5 | 275.4 | 1.20 ± 0.12 |
| `node index.js ahocorasick 10000` | 215.8 ± 19.4 | 197.7 | 250.3 | 1.06 ± 0.11 |
| `node index.js string-dsa 10000` | 1135.8 ± 32.1 | 1093.5 | 1198.6 | 5.56 ± 0.34 |
| `node index.js aho-corasick2 10000` | 252.9 ± 14.4 | 239.2 | 293.0 | 1.24 ± 0.10 |
| `node index.js @drorgl/aho-corasick2 10000` | 288.9 ± 47.9 | 255.5 | 417.5 | 1.41 ± 0.25 |
| `node index.js aho-corasick-search 10000` | 375.5 ± 15.0 | 359.3 | 408.2 | 1.84 ± 0.12 |
| `node index.js fastscan 10000` | 214.8 ± 17.9 | 200.9 | 257.0 | 1.05 ± 0.10 |
