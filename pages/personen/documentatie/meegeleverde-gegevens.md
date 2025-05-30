# Automatisch meegeleverde gegevens

Sommige gegevens worden automatisch meegeleverd om de afnemer te waarschuwen dat er iets bijzonders aan de hand is. [Automatisch geleverde velden mag je niet vragen met de fields parameter](/personen/features/opschorting-bijhouding/fields).

## De persoonsgegevens worden niet meer bijgehouden 

Als van een persoon de bijhouding van de persoonsgegevens is gestopt, wordt het veld **opschortingBijhouding** met **reden** en **datum** altijd meegeleverd. In de {{apiname}} worden slechts vijf redenen voor opschorting geleverd: overleden, emigratie, ministerieel besluit (NAVO militair), RNI (woont niet in Nederland) en onbekend. Lees meer over [de regels voor de levering van opschortingBijhouding en het gebruik van de fields parameter](/personen/features/opschorting-bijhouding/fields).



## Eén of meer gevraagde velden zijn in onderzoek

Zijn één of meer gevraagde velden in onderzoek, dan worden de bijbehorende **inOnderzoek** en **datumIngangOnderzoek** velden altijd meegeleverd.
Wanneer één of meer velden in onderzoek zijn waaruit een informatieproduct wordt afgeleid (bijv. de adressering velden), dan is het informatieproduct ook in onderzoek en wordt het inOnderzoekveld van het informatieproduct meegeleverd.
Lees meer over de [regels van in onderzoek](/personen/features/in-onderzoek) die beschrijven wanneer de inOnderzoekvelden wel en niet worden geleverd.

## Persoon verblijft niet meer op adres

Wanneer je de verblijfplaatsgegevens of adresregels van een persoon opvraagt waarvan tijdens onderzoek is vastgesteld dat deze niet meer verblijft op het geregistreerde adres, dan wordt het **indicatieVastgesteldVerblijftNietOpAdres** veld met waarde true meegeleverd.

Het veld **indicatieVastgesteldVerblijftNietOpAdres** kan voorkomen in [verblijfplaats](/personen/features/verblijfplaats/adres/vastgesteld-verblijft-niet-op-adres) en in [adressering](/personen/features/adressering/adresregels/vastgesteld-verblijft-niet-op-adres).

## Persoon heeft "geheimhoudingPersoonsgegevens" 

Bij personen die hebben gevraagd om hun gegevens niet te delen met kerken of andere organisaties waaraan een gemeente persoonsgegevens mag geven (bijvoorbeeld sportvereniging of een goed doel) wordt automatisch **geheimhoudingPersoonsgegevens** geleverd. Lees meer over [de regels voor de levering van geheimhoudingPersoonsgegevens](/personen/features/geheimhouding).

## Deelnemer RNI
Bij personen die zijn ingeschreven in de RNI worden de gegevens over de **rniDeelnemer** met **omschrijvingVerdrag** en **categorie** automatisch meegeleverd. Deelnemers zijn aangewezen bestuursorganen die bevoegd zijn om personen in te schrijven of gegevens aan te leveren voor de RNI. Lees meer over [de regels voor het leveren van RNI deelnemer](/personen/features/rni).

## Verificatiegegevens RNI
Bij personen die zijn ingeschreven in de RNI wordt de **verificatie** van de opgenomen gegevens met **datum** en **omschrijving** altijd meegeleverd. Lees meer over [de regels voor het leveren van de verificatie](/personen/features/verificatie/fields)
