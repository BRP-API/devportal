# Welkom bij de '{{apiname}}'
## Zoek en raadpleeg persoonsinformatie

Met de '{{apiname}}' kun je het zoeken en raadplegen van persoonsinformatie uit de Basisregistratie Personen (BRP) integreren in taakapplicaties van jouw organisatie. Naast de vertrouwde persoonsgegevens die door gemeenten en RNI loketten worden geregistreerd, levert de '{{apiname}}' ook [informatieproducten](xxxxconcepten informatoeproducten). Informatieproducten zijn bewerkingen van de standaard gegevens tot:
- *Adressering*: *aanschrijfwijze*, *aanhef*, een verwijzing naar een *persoon in de lopende tekst* van een brief, en *adresregels* die altijd passen in het venster van een envelop.
- *Bewoning*: wie er samen in een woning woonde gedurende een periode, of op een peildatum.
- *Gezag*: gezagsrelaties van alle minderjarigen en gezagshouders, ook als er geen aantekening is in het gezagsregister.  
- *Leeftijd* (in jaren)
- *Volledige naam*: met adellijke titels en predicaten, zonder gebruik van de naam van de partner
- *Voorletters*
  
## Getting Started
1. Download de [OAS3 specificatie]({{mainBranchUrl}}/specificatie/genereervariant/openapi.yaml) van de '{{apiname}}' om hiermee consumer code te genereren.
2. Bouw en test de aansluiting op de '{{apiname}}' in jouw applicatie lokaal met de ['{{apiname}}' mock](xxxxx)
3. Vraag een access token aan voor de [proefomgeving](xxxxx) en voer een acceptatietest uit
4. Vraag een acces token aan voor de productieomgeving en sluit aan.

Eerst de '{{apiname}}' uitproberen? Gebruik [lokaal testen gids](./how-tos/lokaal%20testen.md) om je eerste API call te doen!

## Voorwaarden
1. Controleer of jouw organisatie of klant (als je een leverancier bent) een [autorisatiebesluit](https://publicaties.rvig.nl/Besluiten_en_modelautorisaties/Besluiten/BRP_besluiten) heeft. Aansluiten mag alleen met een autorisatiebesluit.
2. Start de [onboarding](how-tos/onboarden) door een kennismakingsgesprek te plannen via info@rvig.nl.
3. Bespreek en onderteken het aanvullende autorisatiebesluit voor informatieproducten. Voor gemeenten is dit niet nodig.
4. Onderteken het convenant voor [deelname aan het Experiment Dataminimalisatie](xxxxx)

## Documentation
De documentatie is als volgt opgebouwd:

- Concepten: lees de uitleg van belangrijke onderwerpen die een rol spelen bij het gebruik van de '{{apiname}}'
- Tutorials: leer hoe je zaken kunt regelen die nodig zijn bij het gebruik van de API 
- Tooling: gebruik de tool die je sneller op weg helpt de fields parameter correct te implementeren
- Referenties: de specificaties van de '{{apiname}}' functies Personen, Verblijfplaatshistorie en Bewoning

## Planning en Roadmap
De '{{apiname}}' is live sinds mei 2023 en bestaat uit de onderdelen Personen, [Bewoning]({{pagesBaseUrl}}/Haal-Centraal-BRP-bewoning) en [Reisdocumenten]({{pagesBaseUrl}}/Haal-Centraal-Reisdocumenten-bevragen). Rond 1 juli 2024 wordt [Verblijfplaatshistorie]({{pagesBaseUrl}}/Haal-Centraal-BRP-historie-bevragen) verwacht, waarmee je verblijfplaatsen van een persoon kunt opvragen op een peildatum of in een bepaalde periode. 

## Contact
* Heb je een vraag? Neem contact op met de Product Owner {{PO-naam}}, [{{PO-email}}](mailto:{{PO-email}}) 
* Bug Melden
  [Maak een bug issue aan >>](https://github.com/BRP-API/Haal-Centraal-BRP-bevragen/issues/new?assignees=&labels=bug&template=bug_report.md&title=)
* Verbeteringen doorgeven
  [Maak een verbeter issue aan >>](https://github.com/BRP-API/Haal-Centraal-BRP-bevragen/issues/new?assignees=&labels=enhancement&template=enhancement.md&title=)

* Product Owner: Cathy Dingemanse, [{{PO-email}}](mailto:{{PO-email}})
* Developer en customer zero: Melvin Lee, [{{CZ-email}}](mailto:{{CZ-email}})
* Tester: Frank Samwel, [{{Tester-email}}](mailto:{{Tester-email}})

## Licentie
Copyright &copy; RvIG 2024
Licensed under the [EUPL]({{mainBranchUrl}}/LICENCE.md)
