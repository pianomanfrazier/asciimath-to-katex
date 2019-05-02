# AsciiMath to Katex

This mini project is a demonstration showing how to parse asciimath input and display it properly using [Katex](https://katex.org/)

## Dependencies

- [Browserify](https://browserify.org)
- [asciimath-to-latex](https://github.com/tylerlong/asciimath-to-latex)
- [Katex](https://katex.org/) of course ;)

## Build

```bash
npm install
npm run build # outputs the bundle.js
```

## Run It Locally

```bash
npm install
npm run build
npx browser-sync --watch
```