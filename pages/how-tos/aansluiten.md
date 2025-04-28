# Testen op de Proefomgeving

Heb je jouw client applicatie gerealiseerd met behulp van de [BRP API mock](./how-tos/lokaal-testen), en ben je toe aan de acceptatietest op de omgeving van RvIG?  
Dan kun je de netwerkverbinding, de toegangsbeveiliging en de communicatie met de API testen in de Proefomgeving met [deze testset](https://www.rvig.nl/testsetpersoonslijstenproefomgevingBRPV). Iedere afnemer van RvIG/ gemeente mag maximaal één aansluiting op BRP API proefomgeving realiseren.

## Voorwaarden
- aansluiten mag alleen met met een API Gateway
- aansluiting op [DigiNetwerk](https://www.logius.nl/domeinen/infrastructuur/diginetwerk/aansluiten)
- TLS met PKIO certificaat/certificaten met OIN: het PKIO certificaat met OIN voor de proefomgeving kun je ook gebruiken in de productieomgeving. Gebruikt jouw API Gateway al een PKIO certificaat voor een ander product van RvIG, dan kun je dat certificaat gebruiken. Heb je een aparte API Gateway voor test en productie? Dan zijn aparte certificaten vereist.
  
## Stap 1: Stuur certificaat
- stuur het publieke deel van het PKIO certificaat met OIN naar: tbrp.api@rvig.nl en geef jouw contactpersoon op.
- jouw contactpersoon ontvangt separaat een client ID en een client secret. Deze mogen alleen bekend zijn bij jouw API Gateway.

## Stap 2: Configureer jouw Gateway
Belangrijke informatie voor de configuratie van jouw Gateway:
- sluit aan via DigiNetwerk 
- URL voor aanvraag van het token: https://auth.npr.idm.diginetwerk.net/nidp/oauth/nam/token
- URL BRP API Personen: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/personen
- URL BRP API Bewoning: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/bewoningen
- URL BRP API Verblijfplaatshistorie: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/verblijfplaatshistorie

## Stap 3: Test jouw client applicatie
Samen beoordelen we de aansluiting. Geslaagd? Dan kun je een aansluiting op de productieomgeving aanvragen.

# Aansluiten productie-omgeving

## Voorwaarden
- een door jouw gemandateerde ondertekend [convenant](xxxx)
- een [BRP autorisatiebesluit](https://publicaties.rvig.nl/Besluiten_en_modelautorisaties/Besluiten/BRP_besluiten) en een aanvullend autorisatiebesluit voor informatieproducten (niet voor gemeenten) 
- aansluiten uitsluitend met API Gateway 
- aansluiting op [DigiNetwerk](https://www.logius.nl/domeinen/infrastructuur/diginetwerk/aansluiten)
- TLS met PKIO certificaat/certificaten met OIN: het PKIO certificaat met OIN voor de proefomgeving kun je ook gebruiken in de productieomgeving. Heb je een aparte API Gateway voor test en productie? Dan zijn aparte certificaten vereist.

## Stap 1: Stuur certificaat
- stuur het publieke deel van het PKIO certificaat met OIN naar: tbrp.api@rvig.nl en geef jouw contactpersoon op.
- jouw contactpersoon ontvangt separaat een client ID en een client secret. Deze mogen alleen bekend zijn bij jouw API Gateway.

## Stap 2: Configureer jouw Gateway
Belangrijke informatie voor de configuratie van jouw Gateway:
- sluit aan via DigiNetwerk 
- URL voor aanvraag van het token: https://auth.idm.diginetwerk.net/nidp/oauth/nam/token
- URL BRP API Personen: https://apigw.idm.diginetwerk.net/lap/api/brp/personen
- URL BRP API Bewoning: https://apigw.idm.diginetwerk.net/lap/api/brp/bewoningen
- URL BRP API Verblijfplaatshistorie: https://apigw.idm.diginetwerk.net/lap/api/brp/verblijfplaatshistorie
