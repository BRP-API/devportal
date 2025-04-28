# Personen response filteren

Geef met de verplichte fields parameter in ieder request aan welke velden van de gevonden persoon of personen in het antwoord geleverd moeten worden. Om de privacy van de gevraagde personen te beschermen mag je uitsluitend gegevens vragen waarvoor jouw organisatie geautoriseerd is, *en wat op dat moment in het proces nodig is* voor de uit te voeren taak. 

## Filteren van de velden van de gevonden personen

Je vraagt een veld door het volledige pad van het veld op te geven in de fields parameter. Het volledige pad van een veld is de samenvoeging van de naam van het veld en de namen van zijn 'ouder' velden met een "punt" tussen de veldnamen. Voorbeelden van volledige paden zijn:

- geboorte.datum (volledig pad van het geboortedatumveld van een persoon)
- kinderen.naam.voornamen (volledig pad van het voornamenveld van de kinderen van een persoon)

Wil je snel en foutloos fields samenstellen voor de requests van jouw applicatie? Gebruik dan de [fields tool](./fields-samenstellen). Succes gegarandeerd, zonder dat je (na het lezen van deze pagina) dieper in de details van de werking van de fieldsparameter hoeft te duiken. 

Heb je een overzicht nodig van alle toegestane fieldswaarden? Bekijk het [fields-filtered-PersoonBeperkt.csv]({{persoonBeperktFieldsCsvUrl}}) overzicht van de toegestane fieldswaarden voor de Zoek personen operaties en het [fields-filtered-Persoon.csv]({{persoonFieldsCsvUrl}}) overzicht voor de fieldswaarden van de Raadpleeg persoon operatie.

Wil je meer achtergrondinformatie over de fields parameter? Bekijk dan de [fields](./features/fields.feature) en de [fields fout cases](./features/fields-fout-cases.feature) voor uitleg over de werking van de fields parameter met regels en voorbeelden. 

### Filteren van datum en waardetabel velden

De {{apiname}} Personen kent de volgende datum types:

- VolledigeDatum
- DatumOnbekend
- JaarDatum
- JaarMaandDatum

en de volgende waardetabel types:

- Waardetabel
- AdellijkeTitelPredicaatType

Als je één of meer velden van deze types vraagt, dan worden altijd alle velden geleverd. Lees [hier](./features/fields.feature) hoe de volgende regels precies worden toegepast:

- [Regel: Het vragen van één of meerdere velden van een 'waardetabel' veld levert alle velden van de 'waardetabel' veld](./features/fields.feature#rule-het-vragen-van-één-of-meerdere-velden-van-een-waardetabel-veld-levert-alle-velden-van-de-waardetabel-veld)
- [Regel: Het vragen van één of meerdere velden van een 'datum' veld levert alle velden van de 'datum' veld](./features/fields.feature#rule-het-vragen-van-één-of-meerdere-velden-van-een-datum-veld-levert-alle-velden-van-de-datum-veld)

### Standaard geleverde velden

Als onderstaande velden van toepassing zijn worden ze automatisch geleverd:

- geheimhoudingPersoonsgegevens
- inOnderzoek
- opschortingBijhouding
- rni
- verificatie
- indicatieVastgesteldVerblijftNietOpAdres

Automatisch geleverde velden mag je NIET vragen met de fields parameter. Doe je dat toch, dan krijg je een foutmelding.

### Filteren van verblijfplaatsvelden

Er zijn twee autorisatieprofielen voor verblijfplaats:

1. geautoriseerd voor ZOWEL verblijfplaats binnenland gegevens (Adres en Locatie) ALS verblijfplaats buitenland gegevens
2. UITSLUITEND geautoriseerd voor verblijfplaats binnenland gegevens (Adres en Locatie)

Als jouw organisatie of applicatie uitsluitend geautoriseerd is voor verblijfplaats binnenland gegevens kun je de standaard veldpaden van verblijfplaats niet gebruiken. Met die veldpaden vraag je namelijk zowel verblijfplaats binnenland als verblijfplaats buitenland velden op. In plaats daarvan moet je de __verblijfplaatsBinnenland__ fields alias gebruiken. Daarmee geef je aan dat je uitsluitend verblijfplaats binnenland gegevens vraagt.

Meer informatie over het gebruik van de __verblijfplaatsBinnenland__ fields alias vind je in de featurebeschrijving van:

- [verblijfplaats fields alias](./features/persoon/verblijfplaats/fields-alias.feature)
- [verblijfplaats fields alias fout cases](./features/persoon/verblijfplaats/fields-alias-fout-cases.feature)

### Filteren van adresregels velden

Net als bij verblijfplaats zijn er twee autorisatieprofielen voor adresregelvelden:

1. geautoriseerd voor ZOWEL adresregels van binnenlandse verblijfplaatsen ALS adresregels van buitenlandse verblijfplaatsen (adresregel1, adresregel2 en adresregel3)
2. UITSLUITEND geautoriseerd voor adresregels van binnenlandse verblijfplaatsen (adresregel1 en adresregel2)

Als jouw organisatie of applicatie niet geautoriseerd is voor het vragen van adresregels van buitenlandse verblijfplaatsen kun je de standaard veldpaden van adresregels niet gebruiken. Met die veldpaden vraag je namelijk zowel binnenlandse als buitenlandse adresregels op. In plaats daarvan moet je de __adresseringBinnenland__ fields alias gebruiken. Daarmee geef je aan dat je uitsluitend binnenlandse verblijfplaatsen vraagt.

Meer informatie over het gebruik van de __adresseringBinnenland__ fields alias vind je in de featurebeschrijving van:

- [adresregels fields alias](./features/persoon/adressering/adres-regels/fields-alias.feature)
- [adresregels fields alias fout cases](./features/persoon/adressering/adres-regels/fields-alias-fout-cases.feature)

### Filteren van partner velden

Als je partners van een persoon vraagt, worden alleen de gevraagde gegevens van de actuele partner(s) geleverd. Dat zijn partner(s)met een niet ontbonden huwelijk of geregistreerd partnerschap met de persoon. Heeft de persoon alleen ontbonden huwelijk/geregistreerd partnerschappen, dan worden de gevraagde gegevens geleverd van de partner met het meest recent ontbonden huwelijk of partnerschap. Lees meer over het vragen van partnergegevens in [partnervelden vragen met fields](./features/persoon/partner/overzicht.feature) 

### Filteren van nationaliteitvelden

De {{apiname}} Personen kent de volgende nationaliteit types:

- Nationaliteit
- Staatloos
- BehandeldAlsNederlander
- VastgesteldNietNederlander
- Onbekend

DE {{apiname}} Personen levert uitsluitend gegevens van actuele nationaliteiten. Dat zijn nationaliteiten die niet beëindigd zijn. Lees meer in [nationaliteitvelden vragen met fields](./features/persoon/nationaliteit/overzicht.feature). 


### Filteren van verblijfstitelvelden

Als je velden van de verblijfstitel vraagt, krijg je alleen antwoord als er een verblijfstitel is die niet is beëindigd. Gegevens van een verblijfstitel worden ook niet geleverd als de aanduiding gelijk is aan 'geen verblijfstitel (meer)'. Lees meer in [verblijfstitelvelden vragen met fields](./features/persoon/verblijfstitel/overzicht.feature)

## Eén of meer gevraagde velden zijn in onderzoek

Om een afnemer te informeren dat één of meer gevraagde velden in onderzoek zijn, worden de bijbehorende velden inOnderzoek en datumIngangOnderzoek geleverd.
Wanneer een gegeven in onderzoek is dat belangrijk is bij de afleiding van informatieproduct, dan is het informatieproduct ook in onderzoek. In dat geval wordt het inOnderzoekveld van het informatieproduct geleverd. Lees meer over onderzoeksgegevens in [in onderzoek](./features/in-onderzoek.feature). 

### Vastgesteld verblijft niet op adres

Als je verblijfplaatsgegevens of adresregels vraagt van een persoon waarvan na onderzoek is vastgesteld dat deze niet meer verblijft op het geregistreerde adres, wordt het **indicatieVastgesteldVerblijftNietOpAdres** veld met waarde true meegeleverd.

Lees meer over **indicatieVastgesteldVerblijftNietOpAdres** in:
- [vastgesteld verblijft niet op adres (verblijfplaats binnenland)](./features/persoon/verblijfplaats/adres/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (locatie)](./features/persoon/verblijfplaats/locatie/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (adresregels vragen bij personen raadplegen)](./features/persoon/adressering/adres-regels/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (adresregels vragen bij personen zoeken)](./features/persoon-beperkt/adressering/adres-regels/vastgesteld-verblijft-niet-op-adres.feature)

## Geen/null/false waarde, leeg object waarde en standaard waarde

Om de payload van een response klein te houden, bevat de response van de BRP API de volgende waarden NIET:

- niet gevraagde velden. Deze velden hebben _null_ als waarde.
- gevraagde velden die de gevraagde persoon niet heeft. Deze velden hebben _null_ als waarde. Voorbeeld: je vraagt het naam.voorvoegsel veld van een persoon die geen voorvoegsel in de naam heeft.
- gevraagde velden hebben de _false_ waarde. Voorbeeld: je vraagt het indicatieCurateleRegister veld van een persoon die niet onder curatele is gesteld.
- gevraagde velden is een groep velden die de persoon niet heeft. Voorbeeld: je vraagt de verblijfstitel velden van een persoon die geen verblijfstitel heeft.
- gevraagde velden hebben de __standaard__ waarde. In de BRP wordt de standaard waarde gebruikt om aan te geven dat een gegeven onbekend is. Voorbeeld: je vraagt het geboorte.plaats veld van een persoon van wie de geboorteplaats onbekend is.
- gevraagde velden hebben geen aanduiding "in onderzoek".

