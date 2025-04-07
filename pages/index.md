# Welkom bij de {{apiname}}
## Zoek en raadpleeg persoonsinformatie

Met de {{apiname}} kun je het zoeken en raadplegen van persoonsinformatie uit de Basisregistratie Personen (BRP) inbouwen in taakapplicaties van jouw organisatie. Naast de vertrouwde persoonsgegevens die door gemeenten en RNI loketten worden geregistreerd, levert de {{apiname}} ook [informatieproducten](xxxxconcepten informatoeproducten). Informatieproducten zijn bewerkingen van de standaard gegevens tot:
- *Adressering*: *aanschrijfwijze*, *aanhef*, een verwijzing naar een *persoon in de lopende tekst* van een brief, en *adresregels* die altijd passen in het venster van een envelop
- *Bewoning*: wie er samen in een woning woonde gedurende een periode, of op een peildatum
- *Gezag*: gezagsrelaties van alle minderjarigen en gezagshouders, ook als er geen aantekening is in het gezagsregister 
- *Leeftijd* (in jaren)
- *Volledige naam*: met adellijke titels en predicaten, zonder gebruik van de naam van de partner
- *Voorletters*.
  
## Getting Started
1. Download de [OAS3 specificatie]({{mainBranchUrl}}/specificatie/genereervariant/openapi.yaml) van de {{apiname}} om consumer code te genereren.
2. Bouw de aansluiting op de {{apiname}} in jouw applicatie en [test lokaal met de {{apiname}}](./how-tos/lokaal%20testen). 
3. Vraag een access token aan voor de [proefomgeving](xxxxx) en voer een acceptatietest uit.
4. Vraag een access token aan voor de productieomgeving.

De {{apiname}} eerst uitproberen? Gebruik de [lokaal testen gids](./how-tos/lokaal%20testen) om je eerste API call te doen!

## Voorwaarden
1. Aansluiten mag alleen met een autorisatiebesluit. Controleer of jouw organisatie of klant (als je een leverancier bent) een [autorisatiebesluit](https://publicaties.rvig.nl/Besluiten_en_modelautorisaties/Besluiten/BRP_besluiten) heeft. 
2. Een aanvullend autorisatiebesluit voor informatieproducten. Voor gemeenten is dit niet nodig.
3. Een ondertekend convenant voor deelname aan het [Experiment Dataminimalisatie](xxxxx).

## Documentatie
De documentatie is alsvolgt opgebouwd:

- Concepten: uitleg van belangrijke onderwerpen die een rol spelen bij het gebruik van de {{apiname}}.
- Tutorials: leer hoe je zaken kunt regelen die nodig zijn bij het gebruik van de {{apiname}}.
- Tooling: tools die je kunt gebruiken om de {{apiname}} sneller en zonder fouten implementeren.
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
