## Probeer en test de API lokaal

Voor alle functies (Personen, Verblijfplaatshistorie en Bewoning) van de de {{ apiname }} is een mock beschikbaar als een containerized applicatie. Deze kun je gemakkelijk hosten op een lokale machine of in een testomgeving. Het voordeel van deze oplossing is dat je je eigen testgevallen kunt toevoegen aan het JSON bestand. Standaard maken de {{ apiname }} mocks gebruik van de [testdataset persoonslijsten proefomgevingen GBA-V](https://www.rvig.nl/media/288) om de productie situatie zo goed mogelijk te simuleren.

Je kunt het [docker compose bestand]({{ mainBranchUrl }}/docker-compose-mock.yml) gebruiken om de {{ apiname }} Personen mock met behulp van [Docker Desktop](https://www.docker.com/products/docker-desktop) te draaien op een lokale machine.

Je kunt er ook voor kiezen om de [Kubernetes configuratie bestanden]({{ devBranchUrl}}/.k8s) gebruiken om de {{ apiname }} mocks te draaien op een lokale machine. 

De volgende paragrafen beschrijven wat je moet doen om de {{ apiname }} mocks op een lokale machine te installeren en aan te roepen.

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) voor het hosten van containers
- Zet Kubernetes ondersteuning aan in Docker Desktop in het Settings/Kubernetes configuratie scherm ![Enable Kubernetes](../img/docker-desktop-enable-k8s.png)
om Docker Desktop te gebruiken om de containers te hosten met behulp van de Kubernetes engine. 

Optioneel kun je de volgende tools ook op de lokale machine installeren:

- [git](https://git-scm.com/downloads) voor het clonen van git repositories
- [Postman](https://www.postman.com/downloads/) voor het aanroepen van {{ apiname }}


### Gebruik Docker als container engine

- Download het [docker compose bestand]({{ mainBranchUrl }}/docker-compose.yml)
- Start een command prompt window voor de map met het docker-compose.yaml bestand
- Start de {{ apiname }} Personen mock met behulp van de volgende statement:
  ```sh

  docker-compose -f docker-compose-mock.yml up -d

  ```
  De {{ apiname }} Personen mock is nu te benaderen via de url: *http://localhost:5001/haalcentraal/api/brp/personen*
- Valideer dat de {{ apiname }} mock draait met behulp van de volgende curl statement:
  ```sh

  curl --location --request POST 'http://localhost:5001/haalcentraal/api/brp/personen' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "type": "RaadpleegMetBurgerservicenummer",
      "burgerservicenummer": ["999993653"],
      "fields": ["burgerservicenummer"]
  }'

  ```
- Om de {{ apiname }} Personen mock container te stoppen voer je de volgende statement uit:
  ```sh

  docker-compose -f docker-compose-mock.yml down

  ```

### Gebruik Kubernetes als container engine

- Download de [kubernetes configuratie bestanden]({{ devBranchUrl }}/.k8s){:target="_blank" rel="noopener"}
- Start een command prompt window voor de map met de kubernetes manifest bestanden
- Start de {{ apiname }} en de mock met behulp van de volgende statement:
  ```sh

  kubectl apply -f .k8s/brppersonenmock-deployment.yaml \
                -f .k8s/brppersonenmock-service.yaml 

  ```
  De {{ apiname }} Personen mock is nu te benaderen via de url: *http://localhost:5001/haalcentraal/api/brp/personen*
- Valideer dat de {{ apiname }} Personen mock draait met behulp van de volgende curl statement:
  ```sh

  curl --location --request POST 'http://localhost:5001/haalcentraal/api/brp/personen' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "type": "RaadpleegMetBurgerservicenummer",
      "burgerservicenummer": ["999993653"],
      "fields": ["burgerservicenummer"]
  }'

  ```
- Om de {{ apiname }} Personen mock container te stoppen voer je de volgende statement uit:
  ```sh

  kubectl delete -f .k8s/brppersonenmock-deployment.yaml \
                 -f .k8s/brppersonenmock-service.yaml 

  ```
