# Automatisch meegeleverde gegevens

Sommige gegevens worden automatisch meegeleverd om de afnemer te waarschuwen dat er iets bijzonders aan de hand is. [Automatisch geleverde velden mag je niet vragen met de fields parameter](https://github.com/BRP-API/personen-informatie-service/blob/main/features/persoon/opschorting-bijhouding/fields.feature.Regel:opschortingBijhouding-mag-niet-worden-gevraagd-omdat-het-automatisch-wordt-geleverd).

## De persoonsgegevens worden niet meer bijgehouden 

Als van een persoon de bijhouding van de persoonsgegevens is gestopt, wordt het veld opschortingBijhouding geleverd zonder dat je er met field naar vraagt. In de {{apiname}} worden slechts vijf redenen voor opschorting geleverd: overleden, emigratie, ministerieel besluit, RNI en onbekend. Bij opschorting door ministerieel besluit wordt er getwijfeld aan de juistheid van de persoonsgegevens in de BRP, en 
wordt iemand bijvoorbeeld (tijdelijk) uitgeschreven uit de BRP of als niet-ingezetene beschouwd. Lees meer over [de regels voor de levering van opschortingBijhouding en het gebruik van de fields parameter](https://github.com/BRP-API/personen-informatie-service/blob/main/features/persoon/opschorting-bijhouding/fields.feature).



## Eén of meer gevraagde velden zijn in onderzoek

Zijn één of meer gevraagde velden in onderzoek, dan worden de bijbehorende *inOnderzoek* en *datumIngangOnderzoek* velden altijd meegeleverd.
Wanneer één of meer velden in onderzoek zijn waaruit een informatieproduct wordt afgeleid (bijv. de adressering velden), dan is het informatieproduct ook in onderzoek en wordt het inOnderzoekveld van het informatieproduct meegeleverd.
Lees meer over de [regels van in onderzoek](./../features/in-onderzoek.feature) die beschrijven wanneer de inOnderzoekvelden wel en niet worden geleverd.

## Persoon verblijft niet meer op adres

Wanneer je de verblijfplaatsgegevens of adresregels van een persoon opvraagt waarvan tijdens onderzoek is vastgesteld dat deze niet meer verblijft op het geregistreerde adres, dan wordt het **indicatieVastgesteldVerblijftNietOpAdres** veld met waarde true meegeleverd.

De functionaliteit van het **indicatieVastgesteldVerblijftNietOpAdres** veld is beschreven in de volgende feature bestanden:
- [vastgesteld verblijft niet op adres (verblijfplaats binnenland)](./../features/persoon/verblijfplaats/adres/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (locatie)](./../features/persoon/verblijfplaats/locatie/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (adresregels vragen bij personen raadplegen)](./../features/persoon/adressering/adres-regels/vastgesteld-verblijft-niet-op-adres.feature)
- [vastgesteld verblijft niet op adres (adresregels vragen bij personen zoeken)](./../features/persoon-beperkt/adressering/adres-regels/vastgesteld-verblijft-niet-op-adres.feature)

## Persoon heeft "geheimhoudingPersoonsgegevens" 

Bij personen die hebben gevraagd om hun gegevens niet te delen met kerken of andere organisaties waaraan een gemeente persoonsgegevens mag geven (bijvoorbeeld sportvereniging of een goed doel) wordt automatisch geheimhoudingPersoonsgegevens met waarde true geleverd. Lees meer over [de regels voor de levering van geheimhoudingPersoonsgegevens](https://github.com/BRP-API/personen-informatie-service/blob/main/features/persoon/geheimhouding/overzicht.feature).

## RNI deelnemer)

Bij personen die zijn ingeschreven in de RNI worden de gegevens over de RNI deelnemer automatisch meegeleverd. Deelnemers zijn aangewezen bestuursorganen die bevoegd zijn om personen in te schrijven of gegevens aan te leveren voor de RNI. Lees meer over [de regels voor het leveren van RNI deelnemer](https://github.com/BRP-API/personen-informatie-service/blob/main/features/persoon/rni/overzicht.feature).

## Verificatiegegevens (RNI)
Bij personen die zijn ingeschreven in de RNI wordt de verificatie van de opgenomen gegevens altijd meegeleverd. Lees meer over [de regels voor het leveren van de verificatie](https://github.com/BRP-API/personen-informatie-service/blob/main/features/persoon/verificatie/fields.feature)
