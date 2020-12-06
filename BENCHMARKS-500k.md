| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `node index.js fastscan 500000` | 4.918 ± 0.131 | 4.799 | 5.188 | 1.00 |
| `node index.js node-aho-corasick 500000` | 5.327 ± 0.160 | 4.965 | 5.513 | 1.08 ± 0.04 |
| `node index.js @drorgl/aho-corasick2 500000` | 9.940 ± 1.227 | 9.007 | 12.257 | 2.02 ± 0.26 |
