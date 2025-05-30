# Personen zoek en Raadplegen

Lees hier hoe je actuele personen uit de BRP voor jouw applicatie kunt zoeken en raadplegen met hun identificerende gegevens. In de BRP worden personen uniek geïdentificeerd met hun burgerservicenummer.

* Is het burgerservicenummer van de persoon/personen bekend? Dan moet jouw applicatie de **Raadpleeg persoon met burgerservicenummer** operatie gebruiken om één of meer personen te raadplegen.
* Is het burgerservicenummer van de persoon/personen niet bekend? Laat deze dan opzoeken met de **Zoek persoon** operaties.

## Gebruik ook de BAG API 

Biedt jouw applicatie het zoeken van personen met hun adresgegevens aan? Gebruik dan ook de [BAG API Individuele bevragingen](https://www.kadaster.nl/zakelijk/producten/adressen-en-gebouwen/bag-api-individuele-bevragingen) om de unieke identificatie van een adres te vinden, en bevraag daarmee de {{apiname}} Personen. Dan bevraag je uitsluitend gegevens van personen die je nodig hebt. In tegenstelling tot de BAG API zoek je met de operaties **zoek met postcode en huisnummer** en **zoek met straat, huisnummer en gemeente van inschrijving** van de BRP API naar personen op een adres, en niet naar adressen. Zoeken met postcode en huisnummer in de BRP levert bovendien vaak persoonsgegevens van bewoners van meer dan één adres. Gebruik deze zoekfunctie daarom alleen als het **zoeken met adresseerbaar object identificatie** of **zoeken met nummeraanduiding identificatie** met behulp van de BAG niet kan. Bijvoorbeeld omdat je het adres van de persoon die je zoekt niet precies weet, of omdat het adres niet in de BAG voorkomt. Zo lever je een bijdrage aan dataminimalisatie, zonder consessies te doen aan de gebruikersvriendelijkheid. De zoekmogelijkheden van de BAG API zijn uitgebreider en ondersteunen "search as you type".


## Zoek personen

Gebruik onderstaande zoekoperaties om een persoon te zoeken door (niet-uniek) identificerende persoonsgegevens op te geven. In de overzichten en foutcases vind je voorbeelden die laten zien aan welke eisen de parameters moeten voldoen, en hoe je wildcards en diacrieten kunt gebruiken.

- zoek met geslachtsnaam en geboortedatum
  - [overzicht](/personen/features/zoek-met-geslachtsnaam-en-geboortedatum/overzicht)
  - [fout cases](/personen/features/zoek-met-geslachtsnaam-en-geboortedatum/fout-cases)
- zoek met geslachtsnaam, voornamen en gemeente van inschrijving
  - [overzicht](/personen/features/zoek-met-geslachtsnaam-voornamen-en-gemeente-van-inschrijving/overzicht)
  - [fout cases](/personen/features/zoek-met-geslachtsnaam-voornamen-en-gemeente-van-inschrijving/fout-cases)
- zoek met postcode en huisnummer
  - [overzicht](/personen/features/zoek-met-postcode-en-huisnummer/overzicht)
  - [fout cases](/personen/features/zoek-met-postcode-en-huisnummer/fout-cases)
- zoek met straat, huisnummer en gemeente van inschrijving
  - [overzicht](/personen/features/zoek-met-straatnaam-huisnummer-en-gemeente-van-inschrijving/overzicht)
  - [fout cases](/personen/features/zoek-met-straatnaam-huisnummer-en-gemeente-van-inschrijving/fout-cases)
- zoek met nummeraanduiding identificatie
  - [overzicht](/personen/features/zoek-met-nummeraanduiding-identificatie/overzicht)
  - [fout cases](/personen/features/zoek-met-nummeraanduiding-identificatie/fout-cases)
- zoek met adresseerbaar object identificatie
  - [overzicht](/personen/features/zoek-met-adresseerbaar-object-identificatie/overzicht)
  - [fout cases](/personen/features/zoek-met-adresseerbaar-object-identificatie/fout-cases)

### Twee responsetypen bij zoeken
Het resultaat van de zoekoperaties is een lijst met alle personen die voldoen aan de opgegeven parameters. Van deze personen krijg je een beperkt aantal identificerende gegevens, zodat jouw applicatie of jouw gebruiker kan kiezen welke persoon te raadplegen. Alle zoekoperaties leveren een **persoonBeperkt response**, behalve de operatie zoek-met-adresseerbaar-object-identificatie.  
Om alle gezagsrelaties op een adres te kunnen vragen is de response van de zoekoperatie zoek-met-adresseerbaar-object-identificatie uitgebreid met het informatieproduct gezag. Als je zoekt met de zoek-met-adresseerbaar-object-identificatie zoekoperatie, dan krijg je de **gezagPersoonBeperkt response**.   
Van de personen in beide responsetypen krijg je uitsluitend [gegevens waar je om vraagt](./personen-response-filteren) en waar je recht op hebt.

### Maximaal aantal zoekresultaten
Voor alle zoekoperaties is een maximum gesteld aan het aantal personen in het antwoord die voldoen aan de opgegeven criteria. Zodra het maximum aantal personen wordt overschreden volgt een foutmelding.  

Het aantal gevonden personen in het antwoord is maximaal 10 bij de zoekoperaties:  
- zoek met geslachtsnaam en geboortedatum
- zoek met geslachtsnaam, voornamen en gemeente van inschrijving.
  
Het aantal gevonden personen in het antwoord is maximaal 30 bij de zoekoperaties:
- zoek met postcode en huisnummer
- zoek met straat, huisnummer en gemeente van inschrijving
- zoek met nummeraanduiding identificatie
- zoek met adresseerbaar object identificatie

 
### Uitsluitend binnengemeentelijk zoeken

Ben je uitsluitend geautoriseerd voor het zoeken van eigen inwoners van een gemeente? Gebruik dan de queryparameter **gemeenteVanInschrijving** met de eigen gemeentecode. Dan worden inwoners van andere gemeenten automatisch uit het antwoord gefilterd. Ieder van de bovenstaande zoekoperaties biedt de mogelijkheid om deze parameter op te geven. Lees meer informatie over het [zoeken en raadplegen van alleen binnengemeentelijke personen](/personen/features/zoeken/binnengemeentelijk).

### Overleden personen zoeken
Standaard worden alleen personen gevonden die in leven zijn. Om overleden personen te vinden, moet je de inclusiefOverleden parameter met waarde "true" opgeven. Lees voor meer informatie het [zoeken van overleden personen](/personen/features/zoeken/overleden-personen).

Voor overleden personen wordt altijd het opschortingBijhouding veld geleverd met reden code 'O' en omschrijving 'overlijden'. Lees voor meer informatie het [overlijden overzicht](/personen/features/beperkt/overlijden/overzicht).

## Personen raadplegen

Als het burgerservicenummer bekend is, moet je deze operatie gebruiken om gegevens van de persoon of personen te raadplegen:

- raadpleeg met burgerservicenummer
  - [overzicht](/personen/features/raadpleeg-met-burgerservicenummer/overzicht)
  - [fout cases](/personen/features/raadpleeg-met-burgerservicenummer/fout-cases)

Het resultaat van deze operatie is een lijst van personen van wie het burgerservicenummer overeenkomt met de opgegeven burgerservicenummers. Van deze personen krijg je uitsluitend [gegevens waar je om vraagt](./personen-response-filteren) en waar je recht op hebt.

### Uitsluitend binnengemeentelijk raadplegen 

Ben je uitsluitend geautoriseerd voor het raadplegen van eigen inwoners van een gemeente? Gebruik dan de queryparameter *gemeenteVanInschrijving* met de eigen gemeentecode. Als de geraadpleegde persoon niet in de opgegeven gemeente woont, zal de response leeg zijn.

### Overleden personen raadplegen

De "raadpleeg met burgerservicenummer" operatie levert de personen van wie het burgerservicenummer overeenkomt met de opgegeven burgerservicenummers. Dit kunnen ook personen zijn die zijn overleden.
Voor overleden personen wordt altijd het opschortingBijhouding veld geleverd met reden code 'O' en omschrijving 'overlijden'.  Zie de [overlijden overzicht](/personen/features/overlijden/overzicht) feature voor meer informatie over dit veld.



