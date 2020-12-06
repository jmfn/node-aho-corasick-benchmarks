| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js aho-corasick-node 100000` | 3.978 ± 0.112 | 3.886 | 4.226 | 29.61 ± 4.39 |
| `node index.js node-aho-corasick 100000` | 1.350 ± 0.228 | 1.140 | 1.741 | 10.05 ± 2.24 |
| `node index.js aho-corasick 100000` | 3.780 ± 0.559 | 3.234 | 5.064 | 28.13 ± 5.84 |
| `node index.js lazy-aho-corasick 100000` | 22.265 ± 1.898 | 20.079 | 25.393 | 165.73 ± 27.94 |
| `node index.js @tanishiking/aho-corasick 100000` | 34.548 ± 4.475 | 28.421 | 42.758 | 257.16 ± 50.09 |
| `node index.js ahocorasick 100000` | 10.058 ± 1.049 | 9.077 | 12.175 | 74.87 ± 13.40 |
| `node index.js string-dsa 100000` | 0.134 ± 0.020 | 0.118 | 0.184 | 1.00 |
| `node index.js aho-corasick2 100000` | 2.099 ± 0.158 | 1.941 | 2.328 | 15.62 ± 2.56 |
| `node index.js @drorgl/aho-corasick2 100000` | 1.985 ± 0.117 | 1.859 | 2.195 | 14.78 ± 2.32 |
| `node index.js aho-corasick-search 100000` | 46.565 ± 2.313 | 43.788 | 50.036 | 346.61 ± 53.28 |
| `node index.js fastscan 100000` | 1.059 ± 0.022 | 1.030 | 1.094 | 7.88 ± 1.16 |
