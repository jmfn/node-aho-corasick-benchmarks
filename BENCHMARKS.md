| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 10000` | 912.6 ± 34.0 | 873.5 | 991.2 | 4.37 ± 0.34 |
| `node index.js node-aho-corasick 10000` | 228.5 ± 33.8 | 201.6 | 288.1 | 1.10 ± 0.18 |
| `node index.js aho-corasick 10000` | 208.7 ± 14.3 | 192.3 | 248.4 | 1.00 |
| `node index.js lazy-aho-corasick 10000` | 229.8 ± 13.0 | 214.8 | 256.4 | 1.10 ± 0.10 |
| `node index.js @tanishiking/aho-corasick 10000` | 242.5 ± 18.9 | 224.1 | 287.4 | 1.16 ± 0.12 |
| `node index.js ahocorasick 10000` | 222.1 ± 41.3 | 194.5 | 357.9 | 1.06 ± 0.21 |
| `node index.js string-dsa 10000` | 1161.9 ± 31.2 | 1123.6 | 1222.7 | 5.57 ± 0.41 |
| `node index.js aho-corasick2 10000` | 261.8 ± 20.0 | 245.1 | 301.2 | 1.25 ± 0.13 |
| `node index.js @drorgl/aho-corasick2 10000` | 268.0 ± 13.3 | 256.7 | 303.2 | 1.28 ± 0.11 |
| `node index.js aho-corasick-search 10000` | 409.4 ± 17.7 | 379.7 | 435.3 | 1.96 ± 0.16 |
