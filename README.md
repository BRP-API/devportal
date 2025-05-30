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
Je kunt de developer portal lokaal opstarten met NPM

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
  
## FAQ

1. Hoe kan ik linkjes toevoegen?
   - Verwijzingen naar markdownbestanden in dit project kunnen als volgt toegevoegd worden:
   - `[Voorbeeld](./bestand)`
   - Linken naar subfolders kan ook door
   - `[Voorbeeld](./pages/bestand)`
   - Terug navigeren? Dat kan door meerdere `../` combinaties toe te voegen.
   - `[Voorbeeld](../../bestand)`

> [!Tip]  
> Relatieve links dienen te beginnen met een punt (.) en NIET eindigen met de bestandsextensie (.md/.mdx)

2. Aanhalingstekens in de _config.yml zijn niet nodig en kunnen eventueel weggelaten worden
   
3. Hoe kan ik variabelen gebruiken in de Markdown-bestanden?
   - Verwijzen naar globale variabelen kan door de respectievelijke variabele te noteren tussen twee accolades {{ en }}
   - `{{ apiname }}`
   - Globale variabelen opnemen in een linkje? Dat kan door de spaties weg te laten
   - `[Voorbeeld]({{mainBranchUrl}})`
   - Linkjes met globale variabelen combineren met aanvullende tekst
   - `[Voorbeeld]({{mainBranchUrl}}/bestand.md)`

4. Hoe kan ik verwijzen naar Markdown-bestanden die een spatie in de bestandsnaam bevatten?
   - Dit kan door de spatie te vervangen door %20
   - `[Voorbeeld met spatie](./voorbeeld%20met%spatie)`
  
5. Gebruik bij voorkeur geen spaties, hoofdletters of leestekens in URLs en bestandsnamen. Vervang spaties door koppeltekens (-) om de leesbaarheid te verbeteren en problemen met browserverwijzingen te voorkomen.

6. Gebruik korte, beschrijvende bestandsnamen — bij voorkeur zelfstandige naamwoorden, eventueel aangevuld met werkwoorden.

7. Afbeeldingen toevoegen kan door een JPG/PNG bestand toe te voegen aan de pages/img map. Vervolgens kan er vanuit de markdown-bestanden worden verwezen naar de afbeelding. 
De afbeelding in `pages/img/afbeelding.png` tonen? Dit kan door de bestandslocatie zonder pages/img/ over te nemen in het markdownbestand. 
    - `![Afbeelding](afbeelding.png)`  toont image /pages/img/afbeelding.png
    - `![Afbeelding](./afbeelding.png)`  toont image /pages/img/afbeelding.png

8. Features toevoegen kan met behulp van het GherkinFeature component. Om dit gebruiken:
    - Maak een bestand aan in de pages map of een subfolder hiervan met een .mdx bestandsextensie: Bijvoorbeeld: /pages/personen/features/adressering/aanhef.mdx
    - Kopieer en plak de volgende code in het aangemaakte bestand:
    ```mdx
    import GherkinFeature from '@/components/GherkinFeature.jsx'

    <GherkinFeature url="{plak hier de url}"/>
    ```
    - Wijzig de url naar raw url op github. Bijvoorbeeld: https://raw.githubusercontent.com/BRP-API/Haal-Centraal-BRP-bevragen/refs/heads/master/features/bevragen/persoon/adressering/aanhef/summary.feature
    - Linken naar de feature kan als volgt: `[link](/personen/features/adressering/aanhef)`
    - Een mdx bestand kan ook `index.mdx` heten: Bijvoorbeeld: /pages/personen/features/adressering/index.mdx, linkjes naar dit bestand hoeven dan alleen de naam van de folder te bevatten: `[link](/personen/features/adressering)`
