Benchmark various aho-corasick node libraries.

Run [benchmarks](./BENCHMARKS-10k.md) for 10,000 keywords

```
hyperfine --export-markdown BENCHMARKS-10k.md \
  --parameter-list lib aho-corasick-node,node-aho-corasick,aho-corasick,lazy-aho-corasick,@tanishiking/aho-corasick,ahocorasick,string-dsa,aho-corasick2,@drorgl/aho-corasick2,aho-corasick-search,fastscan \
  'node index.js {lib} 10000'
```

Run [benchmarks](./BENCHMARKS-100k.md) for 100,000 keywords

```
hyperfine --export-markdown BENCHMARKS-100k.md \
  --parameter-list lib aho-corasick-node,node-aho-corasick,aho-corasick,lazy-aho-corasick,@tanishiking/aho-corasick,ahocorasick,string-dsa,aho-corasick2,@drorgl/aho-corasick2,aho-corasick-search,fastscan \
  'node index.js {lib} 100000'
```
