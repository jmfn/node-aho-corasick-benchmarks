Benchmark various aho-corasick node libraries.

Run [benchmarks](./BENCHMARKS.md) for 100,000 keywords

```
hyperfine --export-markdown BENCHMARKS.md \
  --parameter-list lib aho-corasick-node,node-aho-corasick,aho-corasick,lazy-aho-corasick,@tanishiking/aho-corasick,ahocorasick,string-dsa \
  'node index.js {lib} 10000'
```
