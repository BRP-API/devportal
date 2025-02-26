[![Gatsby Publish](https://github.com/BRP-API/devportal/actions/workflows/publish.yml/badge.svg?branch=main)](https://github.com/BRP-API/devportal/actions/workflows/publish.yml)

<p align="center">
  <a href="https://brp-api.github.io/devportal">
    <img alt="Devportal" src="https://raw.githubusercontent.com/BRP-API/devportal/refs/heads/main/src/img/logo.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Developer Portal
</h1>

Het developer portal is de plek waar documentatie, how-to's, references en specificaties van de BRP API's worden gepubliceerd.

## Getting started
Je kunt de developer portal lokaal opstarten via de Gatsby CLI(
[Installatie instructies](
https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli))


Installeer de dependencies in de root van het project:
```bash
npm install
```

Start de lokale development server:
```bash
npm run develop
```

Maak een nieuwe build:
```bash
npm run build
```

Start een build:
```bash
npm run start
```

## Project structuur

Dit project bevat de typische Gatsby project-structuur met een aantal kleine aanpassingen.

```
.
├── src/
├── .gitignore
├── gatsby-config.js
├── package.json
└── README.md
```

De `src/` folder bevat een aantal subfolders waaronder:
  1. `content`: Deze folder bevat de markdown bestanden die omgezet worden naar HTML.
  2. `img`: Deze folder bevat de static assets.
  3. `pages`: Deze folder bevat de Javascript en React componenten waarmee de markdown content omgezet wordt naar pagina's en van stijling wordt voorzien.