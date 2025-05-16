# Personen response filteren

Geef in ieder request met de verplichte fields parameter aan welke velden van de gevonden persoon of personen in het antwoord geleverd moeten worden. Om de privacy van de gevraagde personen te beschermen mag je uitsluitend gegevens vragen waarvoor jouw organisatie geautoriseerd is, *en wat op dat moment in het proces nodig is* voor de uit te voeren taak. 

Een autorisatie die is beperkt tot het zoeken binnen inwoners van de eigen gemeente kan niet worden afgedwongen met de fields parameter. Hiervoor kun je de [queryparameter "gemeente van inschrijving"](./Personen-zoeken-en-raadplegen) gebruiken. 

## Filteren van de velden van de gevonden personen

Je vraagt een veld door het volledige pad van het veld op te geven in de fields parameter. Het volledige pad van een veld is de samenvoeging van de naam van het veld en de namen van zijn 'ouder' velden met een "punt" tussen de veldnamen. Voorbeelden van volledige paden zijn:

- geboorte.datum (volledig pad van het geboortedatumveld van een persoon)
- kinderen.naam.voornamen (volledig pad van het voornamenveld van de kinderen van een persoon)

Wil je snel en foutloos fields samenstellen voor de requests van jouw applicatie? Gebruik dan de [fields tool](./fields-samenstellen). Succes is gegarandeerd, zonder dat je diep in de details van de werking van de fieldsparameter hoeft te duiken. 

Heb je een overzicht nodig van alle toegestane fieldswaarden? Bekijk het [fields-filtered-PersoonBeperkt.csv]({{persoonBeperktFieldsCsvUrl}}) overzicht van de toegestane fieldswaarden voor de Zoek Personen operaties en het [fields-filtered-Persoon.csv]({{persoonFieldsCsvUrl}}) overzicht voor de fieldswaarden van de Raadpleeg Persoon operatie.

Wil je meer achtergrondinformatie over de fields parameter? Bekijk dan de [fields](../features/fields.feature) en de [fields fout cases](../features/fields-fout-cases.feature) voor uitleg over de werking van de fields parameter met regels en voorbeelden. 

### Filteren van datum en waardetabel velden

De {{apiname}} Personen kent de volgende datum types:

- VolledigeDatum
- DatumOnbekend
- JaarDatum
- JaarMaandDatum

en de volgende waardetabel types:

- Waardetabel
- AdellijkeTitelPredicaatType

Als je één of meer velden van deze types vraagt, dan worden altijd alle velden geleverd. Lees [hier](../features/fields.feature) hoe de volgende regels precies worden toegepast:

- [Regel: Het vragen van één of meerdere velden van een 'waardetabel' veld levert alle velden van de 'waardetabel' veld](../features/fields.feature#rule-het-vragen-van-één-of-meerdere-velden-van-een-waardetabel-veld-levert-alle-velden-van-de-waardetabel-veld)
- [Regel: Het vragen van één of meerdere velden van een 'datum' veld levert alle velden van de 'datum' veld](../features/fields.feature#rule-het-vragen-van-één-of-meerdere-velden-van-een-datum-veld-levert-alle-velden-van-de-datum-veld)

### Standaard geleverde velden

Als onderstaande velden van toepassing zijn worden ze automatisch geleverd:

- geheimhoudingPersoonsgegevens
- inOnderzoek
- opschortingBijhouding
- rni
- verificatie
- indicatieVastgesteldVerblijftNietOpAdres

[Automatisch geleverde velden](personen/documentatie/meegeleverd-gegevens) mag je NIET vragen met de fields parameter. Doe je dat toch, dan krijg je een foutmelding.

### Filteren van verblijfplaatsvelden

Er zijn twee autorisatieprofielen voor verblijfplaats:

1. geautoriseerd voor ZOWEL verblijfplaats binnenland gegevens (Adres en Locatie) ALS verblijfplaats buitenland gegevens
2. UITSLUITEND geautoriseerd voor verblijfplaats binnenland gegevens (Adres en Locatie)

Als jouw organisatie of applicatie uitsluitend geautoriseerd is voor verblijfplaats binnenland gegevens kun je de standaard veldpaden van verblijfplaats niet gebruiken. Met die veldpaden vraag je namelijk zowel verblijfplaats binnenland als verblijfplaats buitenland velden op. In plaats daarvan moet je de __verblijfplaatsBinnenland__ fields alias gebruiken. Daarmee geef je aan dat je uitsluitend verblijfplaats binnenland gegevens vraagt.

Meer informatie over het gebruik van de __verblijfplaatsBinnenland__ fields alias vind je in de featurebeschrijving van:

- [verblijfplaats fields alias](../features/persoon/verblijfplaats/fields-alias.feature)
- [verblijfplaats fields alias fout cases](../features/persoon/verblijfplaats/fields-alias-fout-cases.feature)

### Filteren van adresregels velden

Net als bij verblijfplaats zijn er twee autorisatieprofielen voor adresregelvelden:

1. geautoriseerd voor ZOWEL adresregels van binnenlandse verblijfplaatsen ALS adresregels van buitenlandse verblijfplaatsen (adresregel1, adresregel2, adresregel3 en land)
2. UITSLUITEND geautoriseerd voor adresregels van binnenlandse verblijfplaatsen (adresregel1 en adresregel2)

Als jouw organisatie of applicatie niet geautoriseerd is voor het vragen van adresregels van buitenlandse verblijfplaatsen kun je de standaard veldpaden van adresregels niet gebruiken. Met die veldpaden vraag je namelijk zowel binnenlandse als buitenlandse adresregels op. In plaats daarvan moet je de __adresseringBinnenland__ fields alias gebruiken. Daarmee geef je aan dat je uitsluitend binnenlandse verblijfplaatsen vraagt.

Meer informatie over het gebruik van de __adresseringBinnenland__ fields alias vind je in de featurebeschrijving van:

- [adresregels fields alias](../features/persoon/adressering/adres-regels/fields-alias.feature)
- [adresregels fields alias fout cases](../features/persoon/adressering/adres-regels/fields-alias-fout-cases.feature)

### Filteren van partner velden

Als je partners van een persoon vraagt, worden alleen de gevraagde gegevens van de actuele partner(s) geleverd. Dat zijn partner(s)met een niet ontbonden huwelijk of geregistreerd partnerschap met de persoon. Heeft de persoon alleen ontbonden huwelijk/geregistreerd partnerschappen, dan worden de gevraagde gegevens geleverd van de partner met het meest recent ontbonden huwelijk of partnerschap. Lees meer over het vragen van partnergegevens in [partnervelden vragen met fields](../features/persoon/partner/overzicht.feature) 

### Filteren van nationaliteitvelden

De {{apiname}} Personen kent de volgende nationaliteit types:

- Nationaliteit
- Staatloos
- BehandeldAlsNederlander
- VastgesteldNietNederlander
- Onbekend

De {{apiname}} Personen levert uitsluitend gegevens van actuele nationaliteiten. Dat zijn nationaliteiten die niet beëindigd zijn. Lees meer in [nationaliteitvelden vragen met fields](../features/persoon/nationaliteit/overzicht.feature). 


### Filteren van verblijfstitelvelden

Als je velden van de verblijfstitel vraagt, krijg je alleen antwoord als er een verblijfstitel is die niet is beëindigd. Gegevens van een verblijfstitel worden ook niet geleverd als de aanduiding gelijk is aan 'geen verblijfstitel (meer)'. Lees meer in [verblijfstitelvelden vragen met fields](../features/persoon/verblijfstitel/overzicht.feature)

