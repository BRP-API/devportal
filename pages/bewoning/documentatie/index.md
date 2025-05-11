# Documentatie BRP API Bewoning

Met de {{apiname}} Bewoning kun je de bewoning van een adresseerbaar object op een peildatum of in een periode raadplegen. Bewoning kun je ophalen met de identificatie van een adresseerbaar object. Een adresseerbaar object is een verblijfsobject, standplaats of ligplaats met een adres waar personen kunnen verblijven. De identiticatie van een adresseerbaar object is het unieke nummer dat dit object in de Basisregistratie Adressen en Gebouwen (BAG) heeft gekregen. Je kunt dit nummer heel gemakkelijk opzoeken door gebruik te maken van de [BAG Individuele Bevragingen API](https://www.kadaster.nl/zakelijk/producten/adressen-en-gebouwen/bag-api-individuele-bevragingen) van het Kadaster. Sluit liever op deze BAG API aan dan het nummer op te (laten) zoeken via de BRP API. Zo lever je weer een bijdrage aan dataminimalisatie!

## Raadplegen van de bewoning van een adresseerbaar object

Met de 'raadpleeg bewoning met periode' operatie kun je voor een adresseerbaar object de bewoning in een periode ophalen.

Een bewoning is een weergave van de samenstelling van de bewoners in een periode op een adresseerbaar object. De response van een bevraging bevat meer bewoningen als de samenstelling van de bewoners in de gevraagde periode is wijzigd.
Een persoon is en was bewoner van een adresseerbaar object als hij volgens de BRP registratie is/was ingeschreven op het adresseerbaar object in de gevraagde periode. De bewoning/adreshouding periode begint op de **datum aanvang adreshouding** van de inschrijving op het adresseerbaar object en eindigt (indien aanwezig) op de **datum aanvang adreshouding** van de volgende inschrijving of op de **datum aanvang adres buitenland** als de persoon is geëmigreerd.

Een persoon is in een gevraagde periode bewoner als de gevraagde periode in de adreshouding periode van de persoon ligt. Overlapt de gevraagde periode geheel of deels de adreshouding van de persoon, dan wordt de persoon alleen voor het overlappende gedeelte van de gevraagde periode als bewoner meegenomen.

Onderstaand stroomdiagram illustreert de beslisboom voor het bepalen of:
- een persoon is ingeschreven op het adresseerbaar object in de gevraagde periode OF
- voor een deel van de gevraagde periode wordt meegenomen als bewoner.
Uitgangspunt in onderstaande beslisboom is dat de datum aanvang (volgende) adreshouding niet geheel of gedeeltelijk onbekend is.
![bewoner flowchart](../img/features-overzicht-1.svg)

