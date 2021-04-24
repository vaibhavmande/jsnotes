<h1 align="center">Next.js + MDX blog for JS quick reference articles</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=flat&logo=sass&logoColor=white"/>
  <img src="https://img.shields.io/badge/next.js-000000?style=flat&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/github/languages/top/vaibhavmande/jsnotes"/>
  <img src="https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB"/>
  <a href="https://www.linkedin.com/in/vaibhavmande/" title="linkedin"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white"></a>
  <a href="https://stackoverflow.com/u/2157907" title="StackOverflow"><img src="https://img.shields.io/badge/Stack_Overflow-FE7A16?style=flat&logo=stack-overflow&logoColor=white"></a>
  <a href="https://vaibhavmande.com/" title="Portfolio"><img src="https://img.shields.io/badge/Portfolio-46a2f1.svg?&style=flat&logo=Google-Chrome&logoColor=white"></a>
</p>

## About

This blog contains multiple JS articles for quick reference. This website is made using [Next.js](https://nextjs.org/ 'Next.js') and [MDX](https://mdxjs.com/ 'MDX'). View **website** at [jsnotes](https://vaibhavmande.com/jsnotes 'jsnotes')

## Installation

Download the code and from the root run

```bash
yarn dev
```

This will run the blog in development mode at port `3000`

## Deploy

```bash
yarn build
```

This will build and export files into `out` folder and also push it to `gh-pages` branch. The site will be hosted using pushed contents.

`next.config.js` contains this blog specific settings `basePath` and `assetPrefix` which needs to be updated if contents of this site are to be hosted at a different location.

## Demo

The site is hosted at [jsnotes](https://vaibhavmande.com/jsnotes 'jsnotes')

## License

[MIT](https://choosealicense.com/licenses/mit/)
