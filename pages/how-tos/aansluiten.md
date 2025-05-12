# Testen op de Proefomgeving

Heb je jouw client applicatie gerealiseerd met behulp van de [BRP API mock](./how-tos/lokaal-testen), en ben je toe aan de acceptatietest op de omgeving van RvIG?  
Dan kun je de netwerkverbinding, de toegangsbeveiliging en de communicatie met de API testen in de Proefomgeving. Iedere afnemer van RvIG/ gemeente mag maximaal één aansluiting op BRP API proefomgeving realiseren.

## Voorwaarden
- aansluiten mag alleen met met een API Gateway
- aansluiting op [DigiNetwerk](https://www.logius.nl/domeinen/infrastructuur/diginetwerk/aansluiten)
- TLS met PKIO certificaat met OIN: het PKIO certificaat met OIN voor de proefomgeving kun je ook gebruiken in de productieomgeving. Gebruikt jouw API Gateway al een PKIO certificaat voor een ander product van RvIG? Dan kun je dat certificaat opnieuw gebruiken. Heb je een aparte API Gateway voor test en productie? Dan zijn aparte certificaten vereist.
  
## Stap 1: Stuur certificaat
- stuur het publieke deel van het PKIO certificaat met OIN naar: tbrp.api@rvig.nl en geef jouw contactpersoon op.
- jouw contactpersoon ontvangt separaat een client ID en een client secret. Deze mogen alleen bekend zijn bij jouw API Gateway.

## Stap 2: Configureer jouw Gateway
Belangrijke informatie voor de configuratie van jouw Gateway:
- sluit aan via DigiNetwerk 
- URL voor aanvraag van het token: https://auth.npr.idm.diginetwerk.net/nidp/oauth/nam/token
- URL BRP API Personen: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/personen
- URL BRP API Bewoning: https://apigw.npr.idm.diginetwerk.net/lap/api/bewoning/bewoningen
- URL BRP API Verblijfplaatshistorie: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/verblijfplaatshistorie

## Stap 3: Haal het Oauth token op  
Voor je de API kunt gebruiken moet je een token vragen. Voor het aanvragen heb je nodig:
-	Client-id: deze ontvang je van RvIG
-	Client-secret: deze ontvang je van RvIG
-	afnemersindicatie: dit is het nummer dat hoort bij je autorisatiebesluit. Dit kun je [hier opzoeken](https://publicaties.rvig.nl/Landelijke_tabellen/Zoekpagina_tabel_35_autorisatietabel).
-	OIN: zit in het PKI overheidscertificaat dat je gebruikt bij het aansluiten.

Stuur dit request om op de proefomgeving een token aan te vragen, en vervang alles wat tussen dubbele accolades staat met de inloggegevens die je hebt:
curl --location -–request POST 'https://auth.npr.idm.diginetwerk.net/nidp/oauth/nam/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'client_id={{client-id}}' \
--data-urlencode 'client_secret={{client-secret}}' \
--data-urlencode 'scope={{ afnemersindicatie }}-{{OIN}}' \
--data-urlencode 'resourceServer=ResourceServer01'
 
Je krijgt dan als antwoord een application/json bericht dat er zo uitziet:
{
  "access_token": "{{access token}}",
  "token_type": "bearer",
  "expires_in": {{geldigheidsduur}},
  "scope": "{{scope}}"
}
 
Het token die in “access_token” stuur je mee met elk request aan de API door deze in te vullen in de request header “Authorization”, voorafgegaan door “Bearer “. Let op dat er 1 spatie staat tussen “Bearer” en het token en er geen spatie of ander teken staat na het token!

De token is beperkt geldig en kan gedurende de geldigheidsperiode voor meerdere API requests gebruikt worden. In “expires_in” staat hoe lang (in seconden) het token geldig is.

## Stap 4: Stuur een request 
Stuur dit request met correct voorbeeld-request-body naar de API op de proefomgeving:
curl --location -–request POST 'https://apigw.npr.idm.diginetwerk.net/lap/api/brp/personen' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer {{access_token}} \
--data '{
  "fields": ["naam.volledigeNaam", "leeftijd", "geslacht", "adressering"],
  "type": "RaadpleegMetBurgerservicenummer",
  "burgerservicenummer": ["999993483"]
}'
 
## Stap 5: Test jouw client applicatie
Test jouw applicatie met [deze testset](https://www.rvig.nl/testsetpersoonslijstenproefomgevingBRPV). Samen beoordelen we de aansluiting. Geslaagd? Dan kun je een aansluiting op de productieomgeving aanvragen.

# Aansluiten productie-omgeving

## Voorwaarden
- een door jouw gemandateerde ondertekend [convenant](xxxx)
- een [BRP autorisatiebesluit](https://publicaties.rvig.nl/Besluiten_en_modelautorisaties/Besluiten/BRP_besluiten) en een aanvullend autorisatiebesluit voor informatieproducten (niet voor gemeenten) 
- aansluiten mag uitsluitend met een API Gateway 
- aansluiting op [DigiNetwerk](https://www.logius.nl/domeinen/infrastructuur/diginetwerk/aansluiten)
- TLS met PKIO certificaat/certificaten met OIN: het PKIO certificaat met OIN voor de proefomgeving kun je ook gebruiken in de productieomgeving. Heb je een aparte API Gateway voor test en productie? Dan zijn aparte certificaten vereist.

## Stap 1: Stuur certificaat
- stuur het publieke deel van het PKIO certificaat met OIN naar: tbrp.api@rvig.nl en geef jouw contactpersoon op.
- jouw contactpersoon ontvangt separaat een client ID en een client secret. Deze mogen alleen bekend zijn bij jouw API Gateway.

## Stap 2: Configureer jouw Gateway
Belangrijke informatie voor de configuratie van jouw Gateway:
- sluit aan via DigiNetwerk 
- URL voor aanvraag van het token: https://auth.idm.diginetwerk.net/nidp/oauth/nam/token
- URL BRP API Personen: https://apigw.idm.diginetwerk.net/api/brp/personen
- URL BRP API Bewoning: https://apigw.idm.diginetwerk.net/api/brp/bewoning/bewoningen
- URL BRP API Verblijfplaatshistorie: https://apigw.idm.diginetwerk.net/api/brp/verblijfplaatshistorie
