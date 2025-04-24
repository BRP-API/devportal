# Welkom bij de {{apiname}}
## Zoek en raadpleeg persoonsinformatie

API voor het zoeken en raadplegen van actuele personen, partners, ouders en kinderen uit de basisregistratie personen (BRP), inclusief de registratie niet-ingezeten (RNI). De BRP API Personen biedt naast persoonsgegevens uit de BRP ook [informatieproducten](./concepten/informatieproducten):
- *Adressering*: *aanschrijfwijze*, *aanhef*, een verwijzing naar een *persoon in de lopende tekst* van een brief, en *adresregels* die altijd passen in het venster van een envelop
- *Bewoning*: wie er samen in een woning woonde gedurende een periode, of op een peildatum
- *Gezag*: gezagsrelaties van alle minderjarigen en gezagshouders, ook als er geen aantekening is in het gezagsregister 
- *Leeftijd* (in jaren)
- *Volledige naam*: met adellijke titels en predicaten, zonder gebruik van de naam van de partner
- *Voorletters*.
  
## Getting Started
1. Download de [OAS3 specificatie]({{mainBranchUrl}}/specificatie/resolved/openapi.yaml) van de {{apiname}} om consumer code te genereren.
2. Bouw de aansluiting op de {{apiname}} in jouw applicatie en [test lokaal met de {{apiname}}](./how-tos/lokaal-testen). 
3. Vraag een access token aan voor de [proefomgeving](./how-tos/testen-op-de-proefomgeving) en voer een acceptatietest uit.
4. Vraag een access token aan voor de productieomgeving.

De {{apiname}} eerst uitproberen? Gebruik de [lokaal testen gids](./how-tos/lokaal-testen) om je eerste API call te doen!

## Voorwaarden
Aansluiten mag alleen met:
1. een [BRP autorisatiebesluit](https://publicaties.rvig.nl/Besluiten_en_modelautorisaties/Besluiten/BRP_besluiten). Controleer of jouw organisatie of klant (als je een leverancier bent) een autorisatiebesluit heeft. 
2. een aanvullend autorisatiebesluit voor informatieproducten. Voor gemeenten is dit niet nodig.
3. een ondertekend convenant voor deelname aan het [Experiment Dataminimalisatie](https://www.digitaleoverheid.nl/nieuws/doe-mee-met-het-experiment-informatieproducten-uit-de-brp/)
4. een aansluiting op [DigiNetwerk](https://www.logius.nl/domeinen/infrastructuur/diginetwerk/aansluiten)
5. een API Gateway.

## Documentatie
De documentatie is alsvolgt opgebouwd:

- How-Tos: praktische gidsen die jou helpen bij het implementeren van de {{apiname}} in jouw applicatie.
- Concepten: uitleg van belangrijke onderwerpen die een rol spelen bij het gebruik van de {{apiname}}.
- Tutorials: vergroot jouw kennis over hoe je zaken kunt regelen die nodig zijn bij het gebruik van de {{apiname}}.
- Referenties: de specificaties van de {{apiname}} functies Personen, Verblijfplaatshistorie en Bewoning.

## Planning en Roadmap
In Q2 wordt het informatieproduct gezag verder verbeterd. Het percentage "gezag niet te bepalen" wordt verder verlaagd door gezag te bepalen voor een deel van de kinderen die in het buitenland zijn geboren. 

De  Notificaties worden op 1 januari 2026 opgeleverd voor gebruik door gemeenten.  

## Contact
* Bug Melden
  [Maak een bug issue aan](https://github.com/BRP-API/Haal-Centraal-BRP-bevragen/issues/new?assignees=&labels=bug&template=bug_report.md&title=)
* Verbeteringen doorgeven
  [Maak een verbeter issue aan](https://github.com/BRP-API/Haal-Centraal-BRP-bevragen/issues/new?assignees=&labels=enhancement&template=enhancement.md&title=)
* Heb je een vraag? Neem contact op met: 
    * Product Owner: Cathy Dingemanse, [{{PO-email}}](mailto:{{PO-email}})
    * Developer en customer zero: Melvin Lee, [{{CZ-email}}](mailto:{{CZ-email}})
    * Tester: Frank Samwel, [{{Tester-email}}](mailto:{{Tester-email}})

## Licentie
Copyright &copy; RvIG 2024
Licensed under the [EUPL]({{mainBranchUrl}}/LICENCE.md)
