# Personen zoek en Raadplegen

Lees hier hoe je actuele personen uit de BRP voor jouw applicatie kunt zoeken en raadplegen met hun identificerende gegevens. In de BRP worden personen uniek geïdentificeerd met hun burgerservicenummer.

* Is het burgerservicenummer van de persoon/personen bekend? Dan moet jouw applicatie de *Raadpleeg persoon met burgerservicenummer* operatie gebruiken om één of meer personen te raadplegen.
* Is het burgerservicenummer van de persoon/personen niet bekend? Laat deze dan opzoeken met de *Zoek persoon* operaties.

## Zoek personen

Gebruik de volgende zoekoperaties om een persoon te zoeken door niet-uniek identificerende persoonsgegevens op te geven:

- zoek met geslachtsnaam en geboortedatum
  - [overzicht](./../features/zoek-met-geslachtsnaam-en-geboortedatum/overzicht.feature)
  - [fout cases](./../features/zoek-met-geslachtsnaam-en-geboortedatum/fout-cases.feature)
- zoek met geslachtsnaam, voornamen en gemeente van inschrijving
  - [overzicht](./../features/zoek-met-geslachtsnaam-voornamen-en-gemeente-van-inschrijving/overzicht.feature)
  - [fout cases](./../features/zoek-met-geslachtsnaam-voornamen-en-gemeente-van-inschrijving/fout-cases.feature)
- zoek met postcode en huisnummer
  - [overzicht](./../features/zoek-met-postcode-en-huisnummer/overzicht.feature)
  - [fout cases](./../features/zoek-met-postcode-en-huisnummer/fout-cases.feature)
- zoek met straat, huisnummer en gemeente van inschrijving
  - [overzicht](./../features/zoek-met-straatnaam-huisnummer-en-gemeente-van-inschrijving/overzicht.feature)
  - [fout cases](./../features/zoek-met-straatnaam-huisnummer-en-gemeente-van-inschrijving/fout-cases.feature)
- zoek met nummeraanduiding identificatie
  - [overzicht](./../features/zoek-met-nummeraanduiding-identificatie/overzicht.feature)
  - [fout cases](./../features/zoek-met-nummeraanduiding-identificatie/fout-cases.feature)
- zoek met adresseerbaar object identificatie

Het resultaat van de zoekoperaties is een lijst met alle personen die voldoen aan de opgegeven parameters. Van deze personen krijg je een beperkt aantal identificerende [gegevens waar je om hebt gevraagd](./Personen-response-filteren), zodat jouw applicatie of jouw gebruiker kan kiezen welke persoon te raadplegen. 

### Uitsluitend binnengemeentelijk zoeken

Ben je uitsluitend geautoriseerd voor het zoeken van eigen inwoners van een gemeente? Gebruik dan de queryparameter *gemeenteVanInschrijving* met de eigen gemeentecode. Dan worden inwoners van andere gemeenten automatisch uit het antwoord gefilterd. Ieder van de bovenstaande zoekoperaties biedt de mogelijkheid om deze parameter op te geven.

### Overleden personen zoeken
Standaard worden alleen personen gevonden die in leven zijn. Om overleden personen te vinden, moet je de inclusiefOverleden parameter met waarde "true" opgeven.
Voor overleden personen wordt altijd het opschortingBijhouding veld geleverd met reden code 'O' en omschrijving 'overlijden'. Lees voor meer informatie het [overlijden overzicht](./../features/persoon-beperkt/overlijden/overzicht.feature).

## Personen raadplegen

Als het burgerservicenummer bekend is, moet je deze operatie gebruiken om gegevens van de persoon of personen te raadplegen:

- raadpleeg met burgerservicenummer
  - [overzicht](./../features/raadpleeg-met-burgerservicenummer/overzicht.feature)
  - [fout cases](./../features/raadpleeg-met-burgerservicenummer/fout-cases.feature)

Het resultaat van deze operatie is een lijst van personen van wie het burgerservicenummer overeenkomt met de opgegeven burgerservicenummers. Van deze personen krijg je uitsluitend [gegevens waar je om vraagt](./Personen-response-filteren) en waar je recht op hebt.

### Uitsluitend binnengemeentelijk raadplegen 

Ben je uitsluitend geautoriseerd voor het raadplegen van eigen inwoners van een gemeente? Gebruik dan de queryparameter *gemeenteVanInschrijving* met de eigen gemeentecode. Als de geraadpleegde persoon niet in de opgegeven gemeente woont, zal de response leeg zijn.

### Overleden personen raadplegen

De "raadpleeg met burgerservicenummer" operatie levert de personen van wie het burgerservicenummer overeenkomt met de opgegeven burgerservicenummers. Dit kunnen ook personen zijn die zijn overleden.
Voor overleden personen wordt altijd het opschortingBijhouding veld geleverd met reden code 'O' en omschrijving 'overlijden'.  Zie de [overlijden overzicht](./../features/persoon/overlijden/overzicht.feature) feature voor meer informatie over dit veld.

# Automatisch meegeleverde gegevens
Sommige gegevens worden automatisch meegeleverd om de afnemer te waarschuwen dat er iets bijzonders aan de hand is.

## Eén of meer gevraagde velden zijn in onderzoek

Zijn één of meer gevraagde velden in onderzoek, dan worden de bijbehorende *inOnderzoek* en *datumIngangOnderzoek* velden altijd meegeleverd.
Wanneer één of meer velden in onderzoek zijn waaruit een informatieproduct wordt afgeleid (bijv. de adressering velden), dan is het informatieproduct ook in onderzoek en wordt het inOnderzoekveld van het informatieproduct meegeleverd.
Lees meer over de [regels van in onderzoek](./../features/in-onderzoek.feature) die beschrijven wanneer de inOnderzoekvelden wel en niet worden geleverd.

### Persoon verblijft niet meer op adres

Wanneer je de verblijfplaatsgegevens of adresregels van een persoon opvraagt waarvan tijdens onderzoek is vastgesteld dat deze niet meer verblijft op het geregistreerde adres, dan wordt het **indicatieVastgesteldVerblijftNietOpAdres** veld met waarde true meegeleverd.

De functionaliteit van het **indicatieVastgesteldVerblijftNietOpAdres** veld is beschreven in de volgende feature bestanden:
- [vastgesteld verblijft niet op adres (verblijfplaats binnenland)](./../features/persoon/verblijfplaats/adres/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (locatie)](./../features/persoon/verblijfplaats/locatie/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (adresregels vragen bij personen raadplegen)](./../features/persoon/adressering/adres-regels/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (adresregels vragen bij personen zoeken)](./../features/persoon-beperkt/adressering/adres-regels/vastgesteld-verblijft-niet-op-adres.feature)

## Geen/null/false waarde, leeg object waarde en standaard waarde

Om de payload van een response klein te houden, zijn de volgende waarden geen onderdeel van de response:

- niet gevraagde velden. Deze velden hebben _null_ als waarde.
- gevraagde velden die de gevraagde persoon niet heeft. Deze velden hebben _null_ als waarde. Voorbeeld: naam.voorvoegsel veld wordt gevraagd voor een persoon die geen voorvoegsel in zijn naam heeft.
- gevraagde velden hebben de _false_ waarde. Voorbeeld: indicatieCurateleRegister veld wordt gevraagd voor een persoon die niet onder curatele is gesteld.
- gevraagde velden is een groep velden die de persoon niet heeft. Voorbeeld: verblijfstitel velden wordt gevraagd voor een persoon die geen verblijfstitel heeft
- gevraagde velden heeft de __standaard__ waarde. In de BRP wordt de standaard waarde gebruikt om aan te geven dat een gegeven onbekend is. Voorbeeld: geboorte.plaats veld wordt gevraagd voor een persoon waarvan de geboorteplaats onbekend is
- gevraagde velden hebben geen aanduiding "in onderzoek".
