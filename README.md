[![Publish](https://github.com/BRP-API/devportal/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/BRP-API/devportal/actions/workflows/deploy.yml)

<p align="center">
  <a href="https://brp-api.github.io/devportal">
    <img alt="Devportal" src="https://raw.githubusercontent.com/BRP-API/devportal/refs/heads/main/public/logo.svg" width="60" />
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
npm run dev
```

Maak een nieuwe build:
```bash
npm run build
```

Start een build:
```bash
npm run serve
```

## Project structuur

Dit project bevat de volgende onderdelen
  1. `pages`: Deze folder bevat de markdown bestanden die omgezet worden naar HTML.
  2. `public`: Deze folder bevat de static assets.
  3. `styles`: Deze folder bevat de styles en de fonts.
  4. `components`: Deze folder bevat React componenten.
  