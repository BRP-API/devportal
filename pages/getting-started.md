# Getting Started

Gemeenten en andere organisaties met een autorisatiebesluit kunnen zich aanmelden voor deelname aan het Experiment dataminimalisatie. Stuur een mail naar info@RvIG voor een kennismakingmakingsgesprek en onboarding.

Als developer kun je direct aan de slag:
1. Download de [OAS3 specificatie]({{mainBranchUrl}}/specificatie/resolved/openapi.yaml) van de {{apiname}} om consumer code te genereren.
2. Bouw de aansluiting op de {{apiname}} in jouw applicatie en [test lokaal met de {{apiname}}](./how-tos/lokaal-testen). 
3. Vraag een access token aan voor de [proefomgeving](./how-tos/testen-op-de-proefomgeving) en voer een acceptatietest uit.
4. Vraag een access token aan voor de productieomgeving.

## Functionaliteit en specificaties

Bekijk de OAS3 specificatie in Redoc van van de {{apiname}} [Personen](./personen/specificatie), [Bewoning](./bewoning/specificatie) en [Verblijfplaatshistorie](./historie/specificatie).

Download de [OAS3 {{apiname}} Personen]({{PersonenSpecUrl}}), [OAS3 {{apiname}} Bewoning]({{BewoningSpecUrl}}) en [OAS3 {{apiname}} Verblijfplaatshistorie]({{VerblijfplaatshistorieSpecUrl}}) en genereer hiermee consumercode.

Lees goed hoe je de gegevens in [de response van de {{apiname}} Personen filtert](./how-tos/personen-response-filteren), zodat jouw applicatie uitsluitend informatie vraagt die op dat moment nodig is en waarvoor autorisatie is verleend.

Een beschrijving van de {{apiname}} functies en hun gedrag vind je onder [gedrag {{apiname}} Personen](./personen/gedrag), [gedrag {{apiname}} Bewoning](./bewoning/gedrag) en [gedrag {{apiname}} Verblijfplaatshistorie](./verblijfplaatshistorie/gedrag).


## Probeer en test de {{apiname}} lokaal

Een mock van de {{apiname}} is beschikbaar als een containerized applicatie, die je gemakkelijk kunt hosten op een lokale machine of in een testomgeving. Lees [hier](./how-tos/lokaal-testen) hoe je dat doet.

## Vraag een access token aan voor de RvIG proefomgeving

Lees [hier](./how-tos/aansluiten) hoe je kunt aansluiten op de RvIG proef- en productieomgeving.
