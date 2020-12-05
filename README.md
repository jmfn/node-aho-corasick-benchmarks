Benchmark various aho-corasick node libraries.

Run [benchmarks](./BENCHMARKS.md)

```
hyperfine --export-markdown BENCHMARKS.md --parameter-list lib aho-corasick-node,node-aho-corasick \
  'node index.js {lib} 10000 10000'
```
