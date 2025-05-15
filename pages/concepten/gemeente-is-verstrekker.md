# De gemeente als verstrekker van persoonsinformatie  

De gemeente mag de {{apiname}} gebruiken om de BRP-V te **raadplegen**, met het doel informatie over personen aan binnengemeentelijke afnemers te **verstrekken**. De rol van gemeenten als verstrekker brengt verplichtingen met zich mee. De gemeente moet:
1. rechtmatig verstrekken door uitsluitend binnengemeentelijke afnemers te autoriseren op basis van een wettelijke grondslag
2. zorgen voor veilig gebruik van de persoonsgegevens door:
> - uitsluitend geautoriseerde gebruikers van taakapplicaties toegang te geven.
> - gebruikers uitsluitend toegang te geven tot gegevens waarvoor zij zijn geautoriseerd.
3.  transparant zijn over de verwerking van persoonsgegevens
> - door alle bevragingen te protocolleren/loggen
> - door een burger inzicht te geven welke persoonsgegevens verwerkt zijn voor welke doeleinden, als die burger daar om vraagt.
4.  toezicht houden op de rechtmatige verwerking van persoonsgegevens en onrechtmatig gebruik opsporen.

## Centrale regie op beveiliging
Om veilig te kunnen werken met de {{apiname}} moet je drie zaken regelen:
1. Toegangsbeveiliging, autorisatie en filtering
2. Logging- en protocollering voor controle achteraf en het voorkomen van misbruik
3. Beheer van identiteiten, rollen en rechten 
Dit wordt van oudsher geheel of gedeeltelijk geregeld in de taakapplicaties of het gegevensmagazijn. In de transitie naar het werken met de {{apiname}} en SaaSapplicaties is het belangrijk dat deze functies centraal in de gemeente worden belegd, en worden uitgevoerd door onafhankelijke, door de gemeente gecontroleerde voorzieningen. Zo houd je als gemeente de regie! 

## Toegangsbeveiliging, autorisatie en filtering
Gemeenten bieden een divers palet aan producten en diensten die vaak andere gegevens en informatieproducten nodig hebben. Daarvoor zetten zij taakapplicaties in, die worden gebruikt door medewerkers met verschillende rollen en rechten. Gemeenten moeten hiervoor zelf de toegangsbeveiliging en autorisatie organiseren. Wat is daarvoor nodig?   
<Br>
**1. Identity Provider (IP):**   
Voor het authenticeren van de eindgebruiker waarin de claims voor het gebruik van de {{apiname}} van alle gebruikers van jouw gemeente centraal zijn vastgelegd. Nadat de Identity provider heeft vastgesteld wie de ingelogde gebruiker is en welke applicatie de {{apiname}} namens de gebruiker gaat bevragen, kunnen tokens (al dan niet met gebruikersclaims) aan client (SaaS) applicaties worden verstrekt. Hiermee kan de client (SaaS)applicatie namens de gebruiker de {{apiname}} bevragen.  
<Br>
**2. API Gateway**  
Voor de (toegangs)beveiliging van de {{apiname}} en alle andere API’s. Een API Gateway is vaak onderdeel van een product voor API Management. Een API Gateway bevat ondersteuning voor het design, publiceren, documenteren, beveiligen en analyseren van API’s. Een API Gateway is een must have voor iedere gemeente die gevoelige API’s aan afnemers aanbiedt.   
<Br>
**3. Proxy**  
Voor autorisatie op detailniveau. Met welke rol of taak mag een medewerker of applicatie welke set gegevens opvragen? Hiervoor maak je gebruik van de [filtermogelijkheden](./how-tos/personen-response-filteren) die de {{apiname}} biedt. Dit kun je regelen in jouw API Gateway, zoals in [dit voorbeeld van de gemeente Amsterdam](https://github.com/Amsterdam/haal-centraal-proxy).

## Logging- en protocollering
Protocollering is een verplichte vorm van logging om een burger inzicht te geven welke persoonsgegevens door wie en met welke doel zijn opgevraagd. Een gemeente moet alle bevragingen met de {{apiname}} protocolleren en 20 jaar bewaren. Dat gebeurt nu meestal in diverse procesapplicaties. Het is beter om een centrale logging- of protocolleringsvoorziening in te richten, waarin wordt vastgelegd:
-	over wie gegevens zijn verstrekt;
-	datum en tijd van de verstrekking;
-	het taaksysteem/de ambtenaar met een bepaalde taakautorisatie die de verstrekking ontving;
-	welke gegevens zijn verstrekt;
-	aan welk binnengemeentelijk orgaan de verstrekking plaatsvond.

Dit kan bijvoorbeeld door ieder request voor zowel zoeken als raadplegen onweerlegbaar vast te leggen met:
- een timestamp
- het token dat de identiteit, het orgaan en claims van de eindgebruiker bevat
- de BSN's van de personen die in het antwoord voorkomen. *Let op! het kan voorkomen dat jouw binnengemeentelijke afnemer het BSN niet vraagt. Zorg dus dat het BSN in het request van jouw API Gateway aan RvIG [altijd gevraagd](./how-tos/personen-response-filteren) wordt!* Dit kun je regelen in de API Gateway als intermediate endpoint.
Eventueel kun je de logging verrijken met informatie uit je verwerkingsregister om burgerverzoeken in het kader van de AVG zo informatief mogelijk te maken.

Door de API Gateway centraal te laten loggen is opsporing van misbruik gemakkelijker en hoef je straks niet meer te protocolleren in de afnemende taakapplicatie.  
Voor het centraal verzamelen, opslaan en analiseren van de logging, en het maken van protocollerinsgoverzichten, kun je bijvoorbeeld gebruik maken van een product als de ELK Stack (Elastic search, Logstash en Kibana) Splunk, LogRhythm, etc.

## Identity Provider (IP)
Voor het authenticeren van de eindgebruiker waarin de claims voor het gebruik van de {{apiname}} van alle gebruikers van jouw gemeente centraal zijn vastgelegd.

Nadat de Identity provider heeft vastgesteld wie de ingelogde gebruiker is en welke applicatie de {{apiname}} namens de gebruiker wil bevragen, kunnen tokens (al dan niet met gebruikersclaims) aan client applicaties worden verstrekt.

Hiermee kan de client (SaaS)applicatie namens de gebruiker de {{apiname}} bevragen.
