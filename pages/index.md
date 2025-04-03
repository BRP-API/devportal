# Welkom bij de BRP API
## Zoek en raadpleeg persoonsinformatie

Met de BRP API kun je het zoeken en raadplegen van persoonsinformatie uit de Basisregistratie Personen (BRP) integreren in taakapplicaties van jouw organisatie. Naast de vertrouwde persoonsgegevens die door gemeenten en RNI loketten worden geregistreerd, levert de BRP API ook [informatieproducten](xxxxconcepten informatoeproducten). Informatieproducten zijn bewerkingen van de standaard gegevens tot:
- Adressering: aanschrijfwijze, aanhef, een verwijzing naar een persoon in de lopende tekst van een brief, en adresregels die altijd passen in het venster van een envelop.
- Bewoning: wie er samen in een woning woonde gedurende een periode, of op een peildatum.
- Gezag: gezagsrelaties van alle minderjarigen en gezagshouders, ook als er geen aantekening is in het gezagsregister.  
- Leeftijd (in jaren)
- Volledige naam: met adellijke titels en predicaten, zonder gebruik van de naam van de partner
- Voorletters
  
Deze informatieproducten worden voortdurend verbeterd door de RvIG en andere overheidsorganisaties met wie wij samenwerken, zoals de Rechtspraak en het ministerie van Justitie en Veiligheid voor het afleiden van Gezag. Door de informatieproducten van de BRP API te gebruiken innoveert jouw organisatie automatisch mee. Bovendien hoeft jouw organisatie minder persoonsgegevens te verwerken, omdat de BRP API direct biedt wat jij nodig hebt. Daarmee zet je een grote stap vooruit op het gebied van dataminimalisatie en voldoet jouw organisatie beter aan de AVG. De regels die we gebruiken zijn bovendien voor iedereen inzichtelijk, zie XXXXXX.
De juridische grondslag voor het bewerken van persoonsgegevens is geregeld in het [Experimentbesluit Dataminimalisatie](https://zoek.officielebekendmakingen.nl/stb-2024-96.html), ter voorbereiding op een stucturele wetswijziging.

## Getting Started
1. Bouw en test de aansluiting op de BRP API in jouw applicatie lokaal met de [BRP API mock](xxxxx)
2. Vraag een access token aan voor de [proefomgeving](xxxxx) en voer een acceptatietest uit
3. Vraag een acces token aan voor de productieomgeving en sluit aan.

Eerst de BRP API uitproberen? Gebruik [de API uitproberen](/how-tos/uitproberen) gids om je eerste API call te doen!

## Voorwaarden
1. Controleer of jouw organisatie of klant (als je een leverancier bent) een [autorisatiebesluit](https://publicaties.rvig.nl/Besluiten_en_modelautorisaties/Besluiten/BRP_besluiten) heeft. Aansluiten mag alleen met een autorisatiebesluit.
2. Start de [onboarding](how-tos/onboarden) door een kennismakingsgesprek te plannen via info@rvig.nl.
3. Bespreek en onderteken het aanvullende autorisatiebesluit voor informatieproducten. Voor gemeenten is dit niet nodig.
4. Onderteken het convenant voor [deelname aan het Experiment Dataminimalisatie](xxxxx)

## Documentation
De documentatie is als volgt opgebouwd:

- Concepten: lees de uitleg van belangrijke onderwerpen die een rol spelen bij het gebruik van de BRP API
- Tutorials: leer hoe je zaken kunt regelen die nodig zijn bij het gebruik van de API 
- Tooling: gebruik de tool die je sneller op weg helpt de fields parameter correct te implementeren
- Referenties: de specificaties van de BRP API functies Personen, Verblijplaatshistorie en Bewoning

## Planning en Roadmap
De BRP API is live sinds mei 2023 en bestaat uit de onderdelen Personen, [Bewoning]({{pagesBaseUrl}}/Haal-Centraal-BRP-bewoning) en [Reisdocumenten]({{pagesBaseUrl}}/Haal-Centraal-Reisdocumenten-bevragen). Rond 1 juli 2024 wordt [Verblijfplaatshistorie]({{pagesBaseUrl}}/Haal-Centraal-BRP-historie-bevragen) verwacht, waarmee je verblijfplaatsen van een persoon kunt opvragen op een peildatum of in een bepaalde periode. 

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
