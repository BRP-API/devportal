# Getting Started

Gemeenten en andere organisaties met een autorisatiebesluit kunnen zich aanmelden voor deelname aan het Experiment dataminimalisatie. Stuur een mail naar [{{RvIG-email}}](mailto:{{RvIG-email}}) voor een kennismakingmakingsgesprek en onboarding.

Als developer kun je direct aan de slag:
1. Bekijk de OAS3 specificatie in Redoc van van de {{apiname}} Personen, Bewoning en Verblijfplaatshistorie.
2. Download de OAS specificatie van de {{apiname}} Personen, Bewoning of Verblijfplaatshistorie om consumer code te genereren.
3. Bouw de aansluiting op de {{apiname}} in jouw applicatie en test lokaal.
4. Vraag een access token aan voor de proefomgeving en voer een acceptatietest uit. Je bent klaar voor productie!


##  Stap 1: Functionaliteit en specificaties

Bekijk de OAS3 specificatie in Redoc van van de {{apiname}} [Personen](./personen/specificatie), [Bewoning](./bewoning/specificatie) en [Verblijfplaatshistorie](./historie/specificatie). Onderzoek wat je nodig hebt, en waarvoor autorisatie is verleend.

##  Stap 2: Download de OAS
Download de [OAS3 {{apiname}} Personen]({{PersonenSpecUrl}}), [OAS3 {{apiname}} Bewoning]({{BewoningSpecUrl}}) of [OAS3 {{apiname}} Verblijfplaatshistorie]({{VerblijfplaatshistorieSpecUrl}}) die je nodig hebt en genereer hiermee consumercode.

## Stap 3: Probeer en test de {{apiname}} lokaal
Lees [hoe je de response van de {{apiname}} Personen filtert](./how-tos/personen-response-filteren), zodat jouw applicatie uitsluitend informatie vraagt die op dat moment nodig is en waarvoor autorisatie is verleend. Maak eventueel gebruik van de [tool om fields samen te stellen](./how-tos/fields-samenstellen).

Test jouw applicatie door de een mock van de {{apiname}} Personen te gebruiken en deze lokaal als een containerized applicatie te draaien. Je kunt deze [containerized applicatie gemakkelijk hosten op een lokale machine](./how-tos/lokaal-testen) of in jouw testomgeving.

## Stap 4: Vraag een access token aan voor de RvIG proefomgeving

Lees [hier](./how-tos/aansluiten) hoe je kunt aansluiten op de RvIG proef- en productieomgeving. 
