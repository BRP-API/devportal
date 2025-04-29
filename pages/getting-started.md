# Getting Started

Gemeenten en andere organisaties met een autorisatiebesluit kunnen zich aanmelden voor deelname aan het Experiment dataminimalisatie. Stuur een mail naar info@RvIG voor een kennismakingmakingsgesprek en onboarding.

1. Download de [OAS3 specificatie]({{mainBranchUrl}}/specificatie/resolved/openapi.yaml) van de {{apiname}} om consumer code te genereren.
2. Bouw de aansluiting op de {{apiname}} in jouw applicatie en [test lokaal met de {{apiname}}](./how-tos/lokaal-testen). 
3. Vraag een access token aan voor de [proefomgeving](./how-tos/testen-op-de-proefomgeving) en voer een acceptatietest uit.
4. Vraag een access token aan voor de productieomgeving.

## Functionaliteit en specificaties

De interface van de {{apiname}} is beschreven met [OpenAPI Specification v3.0.3](https://spec.openapis.org/oas/v3.0.3).

De OAS3 specificatie van de {{apiname}} kan worden bekeken met behulp van Redoc. Bekijk de specificaties van [Personen](./personen/specificatie), [Bewoning](./bewoning/specificatie) en [Verblijfplaatshistorie](./historie/specificatie).

Download de [OAS3 specificatie]({{mainBranchUrl}}/specificatie/genereervariant/openapi.yaml) van de '{{apiname}}' om hiermee consumer code te genereren.

De [functionele documentatie](./features-overzicht) van de {{apiname}} vind je in het [features overzicht](./features-overzicht).

## Probeer en test de API in de proefomgeving

Je kunt de {{apiname}} uitproberen op de proefomgeving met de volgende url: [{{proefProxyUrl}}]({{proefProxyUrl}}). Hiervoor heb je een apikey nodig.

- Vraag een apikey aan bij de product owner [{{PO-email}}](mailto:{{PO-email}}). 
- Voeg de apikey toe aan een request met de __X-API-KEY__ header.

## Probeer en test de API lokaal

Een mock van de {{apiname}} is beschikbaar als een containerized applicatie, die je gemakkelijk kunt hosten op een lokale machine of in een testomgeving. Bijkomend voordeel is dat je je eigen testgevallen kunt toevoegen aan het JSON bestand.

Je kunt het [docker compose bestand]({{mainBranchUrl}}/docker-compose-mock.yml) gebruiken om de {{apiname}} mock met behulp van [Docker Desktop](https://www.docker.com/products/docker-desktop) te draaien op een lokale machine.

In plaats van het docker compose bestand kun je de [Kubernetes configuratie bestanden]({{devBranchUrl}}/.k8s) gebruiken om de {{apiname}} mock te draaien op een lokale machine. De {{apiname}} mock maakt gebruik van de [testdataset persoonslijsten proefomgevingen GBA-V](https://www.rvig.nl/media/288) als input om de productie situatie zoveel mogelijk te kunnen simuleren.

De volgende paragrafen beschrijven wat je moet doen om de {{apiname}} mock op een lokale machine te installeren en aan te roepen.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) voor het hosten van containers
- Je kunt Docker Desktop ook gebruiken om de containers te hosten met behulp van de Kubernetes engine. Hiervoor moet je in Docker Desktop Kubernetes ondersteuning aanzetten in het Settings/Kubernetes configuratie scherm ![Enable Kubernetes](../img/docker-desktop-enable-k8s.png)

Optioneel kun je de volgende tools ook op de lokale machine installeren:

- [git](https://git-scm.com/downloads) voor het clonen van git repositories
- [Postman](https://www.postman.com/downloads/) voor het aanroepen van {{apiname}}


### Gebruik Docker als container engine

- Download het [docker compose bestand]({{mainBranchUrl}}/docker-compose.yml)
- Start een command prompt window voor de map met het docker-compose.yaml bestand
- Start de {{apiname}} en de mock met behulp van de volgende statement:
  ```sh

  docker-compose -f docker-compose-mock.yml up -d

  ```
  De {{apiname}} mock is nu te benaderen via de url: *http://localhost:5001/haalcentraal/api/brp/personen*
- Valideer dat de {{apiname}} mock draait met behulp van de volgende curl statement:
  ```sh

  curl --location --request POST 'http://localhost:5001/haalcentraal/api/brp/personen' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "type": "RaadpleegMetBurgerservicenummer",
      "burgerservicenummer": ["999993653"],
      "fields": ["burgerservicenummer"]
  }'

  ```
- Om de {{apiname}} mock container te stoppen voer je de volgende statement uit:
  ```sh

  docker-compose -f docker-compose-mock.yml down

  ```

### Gebruik Kubernetes als container engine

- Download de [kubernetes configuratie bestanden]({{devBranchUrl}}/.k8s)
- Start een command prompt window voor de map met de kubernetes manifest bestanden
- Start de {{apiname}} en de mock met behulp van de volgende statement:
  ```sh

  kubectl apply -f .k8s/brppersonenmock-deployment.yaml \
                -f .k8s/brppersonenmock-service.yaml 

  ```
  De {{apiname}} mock is nu te benaderen via de url: *http://localhost:5001/haalcentraal/api/brp/personen*
- Valideer dat de {{apiname}} mock draait met behulp van de volgende curl statement:
  ```sh

  curl --location --request POST 'http://localhost:5001/haalcentraal/api/brp/personen' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "type": "RaadpleegMetBurgerservicenummer",
      "burgerservicenummer": ["999993653"],
      "fields": ["burgerservicenummer"]
  }'

  ```
- Om de {{apiname}} mock container te stoppen voer je de volgende statement uit:
  ```sh

  kubectl delete -f .k8s/brppersonenmock-deployment.yaml \
                 -f .k8s/brppersonenmock-service.yaml 

  ```
