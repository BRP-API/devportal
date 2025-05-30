# {{apiname}} Verblijfplaatshistorie

## Wat is verblijfplaatshistorie?
Met de {{apiname}} Verblijfplaatshistorie kun je de verblijfplaats(en) van een persoon opvragen in een periode of op een peildatum. Je krijgt dan de verblijfplaats waarop de persoon woonde op de opgegeven peildatum, of alle verblijfplaatsen waar de persoon in de opgegeven periode heeft verbleven. Dat heb je bijvoorbeeld nodig als je moet uitzoeken welke gemeente de kosten van het verblijf van een persoon in een instelling moet dragen. Daarvoor moet je weten in welke gemeente de persoon woonde in de periode voor het verblijf in de instelling.  

## Wat heb je nodig?
In de BRP worden personen uniek geïdentificeerd met behulp van hun burgerservicenummer. Dit 9-cijferige nummer gebruik je om aan te geven van welke persoon je de verblijfplaatsgegevens wilt opvragen.

## Raadplegen van de verblijfplaats op een datum
Raadpleeg op welke verblijfplaats een persoon verbleef op een specifieke datum door de operatie “RaadpleegMetPeildatum” en de parameter “peildatum” te gebruiken.

Als je bijvoorbeeld wilt weten waar de persoon verbleef op 3 juli 2021 stuur je als request body:

```json
{
  "burgerservicenummer": "999994669",
  "type": "RaadpleegMetPeildatum",
  "peildatum": "2021-07-03"
}
```

## Raadplegen van de verblijfplaatsen gedurende een periode
Raadpleeg op welke verblijfplaats(en) een persoon verbleef tijdens een periode door de operatie “RaadpleegMetPeriode” en parameters “datumVan” en “datumTot” te gebruiken.

Als je bijvoorbeeld wilt weten waar de persoon verbleef tussen 3 juli 2021 en 8 oktober 2022 stuur je als request body:

```json
{
  "burgerservicenummer": "999994669",
  "type": "RaadpleegMetPeriode",
  "datumVan": "2021-07-03",
  "datumTot": "2022-10-08"
}
```

Het resultaat bevat alle verblijfplaatsen waar de persoon tijdens de periode minimaal 1 dag stond ingeschreven. 
Verblijfplaatsen worden gesorteerd geleverd, zodat de meest actuele verblijfplaats de eerste is in de lijst. 

## Afleidingsregels
De regels voor het opnemen van verblijfplaatsen op basis van opgegeven “datumVan” en “datumTot” volgen binnenkort.

Lees hier hoe de {{apiname}} Verblijfplaatshistorie [omgaat met verschillende typen verblijfplaatsen](/historie/features/raadpleeg-verblijfplaats-met-periode/verblijfplaatsgegevens) 
Bij elke verblijfplaats is “datumVan” (de begindatum van het verblijf) in het antwoord opgenomen. Wanneer de persoon er nu niet meer verblijft is “datumTot” opgenomen als de datum dat de persoon er niet meer verblijft. Lees hier de [regels voor het leveren van datumVan en datumTot](/historie/features/raadpleeg-verblijfplaats-met-periode/datum-van-en-tot).

### Vastgesteld verblijft niet op adres
Als je verblijfplaatsgegevens en/of adresregels vraagt van persoon die niet meer verblijft op het geregistreerde adres, dan wordt het **indicatieVastgesteldVerblijftNietOpAdres** veld met waarde true meegeleverd. Dit betekent dat tijdens een onderzoek naar de verblijfplaats van de persoon is gebleken dat de persoon niet op dit adres woont. Lees hier hoe het [indicatieVastgesteldVerblijftNietOpAdres veld wordt bepaald](/historie/features/raadpleeg-verblijfplaats-met-periode/vastgesteld-verblijft-niet-op-adres).
