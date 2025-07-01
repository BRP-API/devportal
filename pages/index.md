# Welkom bij de {{apiname}}
## Zoek en raadpleeg persoonsinformatie

API voor het zoeken en raadplegen van informatie uit de basisregistratie personen (BRP). De {{apiname}} heeft drie functies:

1. **Personen**: voor het zoeken en raadplegen van van actuele personen, partners, ouders en kinderen uit de BRP, inclusief de registratie niet-ingezeten (RNI).
2. **Bewoning**: voor het raadplegen van de historische bewoning van een adres. Met de API kun je de samenstelling(en) van bewoners van een woning raadplegen binnen een periode of op een peildatum.
3. **Verblijfplaatshistorie**: voor het opvragen van de verblijfplaats(en) van een persoon in een periode of op een peildatum.   

De {{apiname}} levert naast persoonsgegevens uit de BRP ook [informatieproducten](./concepten/informatieproducten):
- **[Adressering](./personen/documentatie/informatieproducten/adressering)**: **aanschrijfwijze**, **aanhef**, een verwijzing naar een **persoon in de lopende tekst** van een brief, en **adresregels** die passen in een envelopvenster.
- **[Bewoning](./bewoning/documentatie)**: wie er samen in een woning woonde gedurende een periode, of op een peildatum
- **[Gezag](./personen/documentatie/informatieproducten/gezag)**: gezagsrelaties van alle minderjarigen en gezagshouders, ook als er geen aantekening is in het gezagsregister 
- **[Leeftijd](./personen/documentatie/informatieproducten/leeftijd)** (in jaren)
- **[Volledige naam](./personen/documentatie/informatieproducten/volledige-naam)**: met adellijke titels en predicaten, zonder gebruik van de naam van de partner
- **[Voorletters](./personen/documentatie/informatieproducten/voorletters)**.
  
## Getting Started
Als developer kun je direct aan de slag. Lees in de [Getting Started](./getting-started) hoe je zo snel mogelijk een eerste succesvolle API call doet. 

De {{apiname}} eerst uitproberen? Gebruik de [lokaal testen gids](./how-tos/lokaal-testen) om je eerste API call te doen!

## Voorwaarden
Aansluiten mag alleen met:
1. een [BRP autorisatiebesluit](https://publicaties.rvig.nl/zoeken). Controleer of jouw organisatie of klant (als je een leverancier bent) een autorisatiebesluit heeft. 
2. een aanvullend autorisatiebesluit voor informatieproducten. Voor gemeenten is dit niet nodig. Download hier het [autorisatieaanvraagformulier](https://www.rvig.nl/media/898).
3. een ondertekend convenant voor deelname aan het [Experiment Dataminimalisatie](https://www.digitaleoverheid.nl/nieuws/doe-mee-met-het-experiment-informatieproducten-uit-de-brp/)
4. een aansluiting op [DigiNetwerk](https://www.logius.nl/domeinen/infrastructuur/diginetwerk/aansluiten)
5. een API Gateway.

## Documentatie
De documentatie is alsvolgt opgebouwd:

- How-Tos: praktische gidsen die jou helpen bij het implementeren van de {{apiname}} in jouw applicatie.
- Concepten: uitleg van belangrijke onderwerpen die een rol spelen bij het gebruik van de {{apiname}}.
- Referenties: de specificaties van de {{apiname}} functies Personen, Verblijfplaatshistorie en Bewoning.

## Planning en Roadmap 
In Q2 wordt het informatieproduct gezag verder verbeterd. Het percentage kinderen met de uitspraak "gezag niet te bepalen" wordt verder verlaagd. Dat doen we door gezag te bepalen voor een deel van de minderjarigen die in het buitenland zijn geboren, of in het buitenland hebben gewoond. Hiervoor wordt een breaking change doorgevoerd op het informatieproduct gezag. Dit is afgestemd met alle afnemers die in productie gebruik maken van gezag. Met hen is afgesproken dat zij v2.6 blijven gebruiken totdat zij zijn overgestapt op v2.7. Zij ontvangen hierover bericht zodra v2.7 in productie is. 

De vierde functie van de {{apiname}} is in ontwikkeling. De {{apiname}} Notificaties is volgend jaar gepland voor gebruik door gemeenten.  

## Contact
* Storing melden?  
  Neem contact op met de **RvIG servicedesk**: op werkdagen telefonisch bereikbaar tussen 08.30 en 17.00 uur via 088-9001000. Vanuit het buitenland bel je naar: +31 707511000.
  Je kunt ook een e-mail sturen naar info@rvig.nl. 
* Bug Melden?
  [Maak een bug issue aan](https://github.com/BRP-API/Haal-Centraal-BRP-bevragen/issues/new?assignees=&labels=bug&template=bug_report.md&title=)
* Verbetersuggestie doen voor de {{apiname}} of de documentatie op deze portal?
  [Maak een verbeter issue aan](https://github.com/BRP-API/Haal-Centraal-BRP-bevragen/issues/new?assignees=&labels=enhancement&template=enhancement.md&title=)
* Heb je een vraag? Neem contact op met: 
    * Product Owner: Cathy Dingemanse, [{{PO-email}}](mailto:{{PO-email}})
    * Developer en customer zero: Melvin Lee, [{{CZ-email}}](mailto:{{CZ-email}})
    * Tester: Frank Samwel, [{{Tester-email}}](mailto:{{Tester-email}})

## Licentie
Copyright &copy; RvIG 2024
Licensed under the [EUPL]({{mainBranchUrl}}/LICENCE.md)
