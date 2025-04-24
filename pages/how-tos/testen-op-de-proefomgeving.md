

Is jouw API client applicatie klaar? 
Dan kun je de netwerkverbinding, de toegangsbeveiliging en de communicatie met de API testen in de Proefomgeving met [deze testset](https://www.rvig.nl/testsetpersoonslijstenproefomgevingBRPV).

Belangrijke informatie voor de configuratie van jouw Gateway:
- aansluiten via DigiNetwerk: 
- TLS verbinding verplicht. Het PKIO certificaat met OIN voor de proefomgeving kan ook gebruikt worden in de productieomgeving. Heb je een aparte API Gateway voor test en productie? Dan zijn aparte certificatie vereist.
- URL voor aanvraag van het token is: https://auth.npr.idm.diginetwerk.net/nidp/oauth/nam/token
- URL BRP API Personen: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/personen
- URL BRP API Bewoning: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/bewoningen
- URL BRP API Verblijfplaatshistorie: https://apigw.npr.idm.diginetwerk.net/lap/api/brp/verblijfplaatshistorie
