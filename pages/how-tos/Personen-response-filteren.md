# Personen response filteren

## Filteren van de velden van de gevonden personen

Elke bevraging moet verplicht een fields parameter bevatten om aan te geven welke velden van de gevonden persoon/personen geleverd moet worden. Om de privacy van de gevraagde personen te beschermen mag een afnemer uitsluitend die velden vragen waarvoor hij doelbinding heeft en wat op dat moment nodig is voor de uit te voeren taak.
Bijkomend voordeel van deze data minimalisatie is dat er ook wordt bijgedragen aan verduurzaming. Hoe minder velden er worden gevraagd, hoe minder de server en het netwerk worden belast.

Een veld wordt gevraagd door het volledige pad van het betreffende veld op te geven in de fields parameter. Het volledige pad van een veld is de samenvoeging van de naam van het veld en de namen van zijn 'ouder' velden met een '.' karakter tussen de veld namen. Voorbeelden van volledige paden zijn:

- geboorte.datum (volledig pad van het geboortedatum veld van een persoon)
- kinderen.naam.voornamen (volledig pad van het voornamen veld van de kinderen van een persoon)

Zie de [fields](./features/fields.feature) en de [fields fout cases](./features/fields-fout-cases.feature) feature bestanden voor meer informatie en voorbeelden van het gebruik van veldpaden en de fields parameter. 

Het [fields-filtered-PersoonBeperkt.csv]({{ site.persoonBeperktFieldsCsvUrl }}){:target="_blank" rel="noopener"} bestand bevat een overzicht van de toegestane fields waarden voor de Zoek personen operaties. Voor de Raadpleeg persoon operatie is de overzicht van toegestane fields waarden te vinden in het [fields-filtered-Persoon.csv]({{ site.persoonFieldsCsvUrl }}){:target="_blank" rel="noopener"} bestand.

Wil je dit snel en foutloos doen? Stel dan je fields eenvoudig samen met de [fields tool](./fields){:target="_blank" rel="noopener"}.

### Filteren van datum en waardetabel velden

De {{ site.apiname }} Web API kent de volgende datum types:

- VolledigeDatum
- DatumOnbekend
- JaarDatum
- JaarMaandDatum

en de volgende waardetabel types:

- Waardetabel
- AdellijkeTitelPredicaatType

Bij het vragen van één of meerdere velden van deze types worden altijd alle velden van het gevraagde type geleverd. In het [fields](./features/fields.feature) feature bestand vind je voorbeelden hiervan onder de volgende rules:

- [Regel: Het vragen van één of meerdere velden van een 'waardetabel' veld levert alle velden van de 'waardetabel' veld](./features/fields.feature#rule-het-vragen-van-één-of-meerdere-velden-van-een-waardetabel-veld-levert-alle-velden-van-de-waardetabel-veld)
- [Regel: Het vragen van één of meerdere velden van een 'datum' veld levert alle velden van de 'datum' veld](./features/fields.feature#rule-het-vragen-van-één-of-meerdere-velden-van-een-datum-veld-levert-alle-velden-van-de-datum-veld)

### Standaard geleverde velden

De volgende velden worden indien van toepassing automatisch geleverd:

- geheimhoudingPersoonsgegevens
- inOnderzoek
- opschortingBijhouding
- rni
- verificatie
- indicatieVastgesteldVerblijftNietOpAdres

Automatisch geleverde velden mogen niet worden gevraagd met de fields parameter.

### Filteren van verblijfplaats velden

Voor verblijfplaats zijn er twee autorisatie profielen:

- geautoriseerd voor zowel verblijfplaats binnenland (Adres en Locatie) en verblijfplaats buitenland gegevens
- geautoriseerd voor alleen verblijfplaats binnenland (Adres en Locatie) gegevens

Afnemers die geautoriseerd zijn voor alleen verblijfplaats binnenland gegevens kunnen hierdoor de standaard veld paden van verblijfplaats niet gebruiken om alleen verblijfplaats binnenland velden te vragen. Met deze veld paden worden namelijk zowel verblijfplaats binnenland als verblijfplaats buitenland gevraagd.

Afnemers die niet geautoriseerd zijn voor verblijfplaats buitenland gegevens moeten daarom de __verblijfplaatsBinnenland__ fields alias gebruiken om aan te geven dat alleen verblijfplaats binnenland gegevens wordt gevraagd.

Het gebruik van de __verblijfplaatsBinnenland__ fields alias is beschreven in de volgende feature bestanden:

- [verblijfplaats fields alias](./features/persoon/verblijfplaats/fields-alias.feature)
- [verblijfplaats fields alias fout cases](./features/persoon/verblijfplaats/fields-alias-fout-cases.feature)

### Filteren van adresregels velden

De adresregelvelden van een persoon worden samengesteld uit de verblijfplaatsvelden van een persoon. Om de adresregelvelden te kunnen vragen moet de afnemer minimaal geautoriseerd zijn voor de verblijfplaatsvelden waarmee de adresregelvelden worden samengesteld.

Dit betekent dat de twee autorisatieprofielen van verblijfplaats ook gelden voor het vragen van adresregelvelden. Afnemers die niet geautoriseerd zijn voor het vragen van adresregels van een verblijfplaats buitenland moeten daarom de __adresseringBinnenland__ fields alias gebruiken om aan te geven dat alleen adresregels voor verblijfplaats binnenland worden gevraagd.

Het gebruik van de __adresseringBinnenland__ fields alias is beschreven in de volgende feature bestanden:

- [adresregels fields alias](./features/persoon/adressering/adres-regels/fields-alias.feature)
- [adresregels fields alias fout cases](./features/persoon/adressering/adres-regels/fields-alias-fout-cases.feature)

### Filteren van partner velden

Bij het vragen van de partners van een persoon worden de gevraagde gegevens van actuele partners (= niet ontbonden huwelijk/geregistreerd partnerschap) geleverd. Heeft de persoon alleen ontbonden huwelijk/geregistreerd partnerschappen, dan worden alleen de gevraagde gegevens van het meest recente ontbonden huwelijk/geregistreerd partnerschap geleverd.

In het volgende feature bestand zijn de bovenstaande regels geïllustreerd aan de hand van scenario's/voorbeelden:

- [partnervelden vragen met fields](./features/persoon/partner/overzicht.feature)

### Filteren van nationaliteitvelden

De {{ site.apiname }} Web API kent de volgende nationaliteit types:

- Nationaliteit
- Staatloos
- BehandeldAlsNederlander
- VastgesteldNietNederlander
- Onbekend

Er wordt alleen gegevens van actuele (= niet beëindigde) nationaliteiten geleverd.

In het volgend feature bestand zijn de bovenstaande regels geïllustreerd aan de hand van scenario's/voorbeelden:

- [nationaliteitvelden vragen met fields](./features/persoon/nationaliteit/overzicht.feature)

### Filteren van verblijfstitelvelden

Wanneer velden van de verblijfstitel wordt gevraagd, dan worden de gevraagde gegevens geleverd als de verblijfstitel niet is beëindigd. Gegevens van een verblijfstitel worden ook niet geleverd als de aanduiding gelijk is aan 'geen verblijfstitel (meer)'.

In het volgende feature bestand zijn de bovenstaande regels geïllustreerd aan de hand van scenario's/voorbeelden:

- [verblijfstitelvelden vragen met fields](./features/persoon/verblijfstitel/overzicht.feature)
