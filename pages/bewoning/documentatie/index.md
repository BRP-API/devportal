# Documentatie BRP API Bewoning

## Wat is een bewoning?
Met de {{apiname}} Bewoning kun je de bewoning van een adresseerbaar object op een peildatum of in een periode raadplegen. Een bewoning is de samenstelling van de bewoners in een periode op een adresseerbaar object. De response van een bevraging bevat meer bewoningen als de samenstelling van de bewoners in de gevraagde periode is wijzigd. Iedere samenstelling van bewoners is dus een bewoning.
Bewoning heb je bijvoorbeeld nodig bij de uitvoering van Wet Bibob, of de Participatiewet. Zo is het voor de kostendelersnorm belangrijk dat je kunt achterhalen met welke personen een client in bepaalde periode heeft samengewoond.

## Wat heb je nodig?
Bewoning kun je ophalen met de identificatie van een adresseerbaar object. Een adresseerbaar object is een verblijfsobject, standplaats of ligplaats met een adres waar personen kunnen wonen. De identiticatie van een adresseerbaar object is het unieke nummer dat dit object in de Basisregistratie Adressen en Gebouwen (BAG) heeft gekregen. Je kunt dit nummer heel gemakkelijk opzoeken door gebruik te maken van de [BAG Individuele Bevragingen API](https://www.kadaster.nl/zakelijk/producten/adressen-en-gebouwen/bag-api-individuele-bevragingen) van het Kadaster. Sluit liever aan op deze BAG API dan het nummer op te (laten) zoeken via de {{apiname}} Personen. Niet alleen zijn de zoekmogelijkheden van deze API veel uitgebreider, je levert ook een bijdrage aan dataminimalisatie!

## Raadplegen van de bewoning van een adresseerbaar object

Met de **raadpleeg bewoning met periode** operatie kun je voor een adresseerbaar object de bewoning in een periode ophalen, door een adresseerbaar object identiticatie en een periode op te geven.
Je krijgt dan één of meer samenstellingen van bewoners en/of mogelijke bewoners gedurende de opgegeven periode.  

Met de **raadpleeg bewoning met peildatum** operatie kun je voor een adresseerbaar object de bewoning in een periode ophalen, door een adresseerbaar object identiticatie en een peildatum op te geven. Je krijgt dan de samenstelling van bewoners en/of mogelijke bewoners op die datum.  

Je krijgt geen bewoning als er in de opgegeven periode geen personen op het adres woonden. Ook sluiten bewoningen niet altijd op elkaar aan als er binnen de opgegeven periode een tijdje niemand op het adres was ingeschreven. Tenslotte kun je een response krijgen met een IndicatieVeelBewoners. Dat betekent dat de bewoning niet wordt bepaald omdat de bewoning in totaal meer dan 100 bewoners en/of mogelijke bewoners heeft.


## Wat is een bewoner?  
Een persoon is en was bewoner van een adresseerbaar object als hij volgens de BRP registratie is/was ingeschreven op het adresseerbaar object in de gevraagde periode. De bewoning/adreshouding periode begint op de **datum aanvang adreshouding** van de inschrijving op het adresseerbaar object en eindigt (indien aanwezig) op de **datum aanvang adreshouding** van de volgende inschrijving of op de **datum aanvang adres buitenland** als de persoon is geëmigreerd.

Een persoon is in een gevraagde periode bewoner als de gevraagde periode in de adreshouding periode van de persoon ligt. Overlapt de gevraagde periode geheel of deels de adreshouding van de persoon, dan wordt de persoon alleen voor het overlappende gedeelte van de gevraagde periode als bewoner meegenomen.

Onderstaand stroomdiagram illustreert de beslisboom voor het bepalen of:
- een persoon is ingeschreven op het adresseerbaar object in de gevraagde periode OF
- voor een deel van de gevraagde periode wordt meegenomen als bewoner.  


![bewoner flowchart](../img/features-overzicht-1.svg)

## Wat is een mogelijke bewoner? 

Als de datum aanvang van de (volgende) adreshouding geheel of gedeeltelijk onbekend is, weten we niet zeker of de persoon in deze periode op het adres heeft gewoond. Het is ook mogelijk dat de persoon op een volgend of vorig adres woonde. In dat geval is de persoon een **mogelijke bewoner**.
Bekijk hieronder de beslisboom waarin wordt bepaald of een persoon wordt meegenomen als mogelijke bewoner.
