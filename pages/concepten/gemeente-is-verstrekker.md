# De gemeente als verstrekker van persoonsinformatie  

## Rol als verstrekker: rechten en plichten
De gemeente mag de {{apiname}} gebruiken om de BRP-V te **raadplegen**, met het doel informatie over personen aan binnengemeentelijke afnemers te **verstrekken**. De rol van gemeenten als verstrekker brengt verplichtingen met zich mee. De gemeente moet:
1. Rechtmatig verstrekken door uitsluitend binnengemeentelijke afnemers te autoriseren op basis van een wettelijke grondslag
2. Zorgen voor veilig gebruik van de persoonsgegevens door:
> - uitsluitend geautoriseerde gebruikers van taakapplicaties toegang te geven.
> - gebruikers uitsluitend toegang te geven tot gegevens waarvoor zij zijn geautoriseerd.
3. Transparant zijn over de verwerking van persoonsgegevens
> - door alle bevragingen te protocolleren/loggen
> - door overzichten te leveren van welke gegevens van een burger verwerkt zijn voor welke doeleinden, als een burger daar om vraagt
4.  Toezicht houden op de rechtmatige verwerking van persoonsgegevens en onrechtmatig gebruik opsporen

## transitie naar centrale beveiliging en controle
Om veilig te kunnen werken met API’s moet je drie zaken regelen:
- (Toegangs)beveiliging, autorisatie en filtering
- Logging- en protocollering voor controle achteraf en het voorkomen van misbruik
- Beheer van identiteiten, rollen en rechten 
Deze zaken werden van oudsher geheel of gedeeltelijk geregeld in de taakapplicaties of het gegevensmagazijn. In de transitie naar het werken met API's en SaaSapplicaties is het belangrijk dat deze functies centraal in de gemeente worden belegd, en worden uitgevoerd door onafhankelijke, door de gemeente gecontroleerde voorzieningen. Zo behoud je als gemeente de regie! 

## Toegangsbeveiliging, autorisatie en filtering
Gemeenten bieden een breed palet aan producten en diensten die allemaal andere gegevens en informatieproducten nodig hebben. Daarvoor zetten zij verschillende taakapplicaties in, die worden gebruikt door medewerkers met verschillende rollen en rechten. Gemeenten moeten hiervoor zelf de toegangsbeveiliging en autorisatie organiseren. Wat is daarvoor nodig?   
<Br>
**1. Identity Provider (IP):**   
Voor het authenticeren van de eindgebruiker waarin de claims voor het gebruik van de API van alle gebruikers van jouw gemeente centraal zijn vastgelegd. Nadat de Identity provider heeft vastgesteld wie de ingelogde gebruiker is en welke applicatie de API namens de gebruiker gaat bevragen, kunnen tokens (al dan niet met gebruikersclaims) aan client (SaaS) applicaties worden verstrekt. Hiermee kan de client (SaaS)applicatie namens de gebruiker de API bevragen.  
<Br>
**2. API Gateway**  
Voor de (toegangs)beveiliging van de API’s. Een API Gateway is vaak onderdeel van een product voor ‘full life cycle API Management’. Een API Gateway bevat ondersteuning voor het design, publiceren, documenteren, beveiligen en analyseren van API’s. Een API Gateway is een must have voor iedere gemeente die gevoelige API’s aan afnemers aanbiedt.   
<Br>
**3. Proxy**  
Voor autorisatie op detailniveau. Dit kun je bijvoorbeeld regelen in jouw API Gateway, zoals [in dit voorbeeld van de gemeente Amsterdam](https://github.com/Amsterdam/haal-centraal-proxy).

## Logging- en protocollering
Een gemeente moet conform de wet BRP alle BRP bevragingen protocolleren. Dat gebeurt nu meestal in diverse procesapplicaties. Het is beter om een centrale logging- of protocolleringsvoorziening in te richten, waarin tenminste ieder API requests onweerlegbaar wordt vastgelegd, samen met het token dat de identiteit en claims van de eindgebruiker bevat.

Door de API Gateway te laten loggen en de toegangsbeveiliging voor nieuwe applicaties te baseren op eindgebruikercredentials, hoef je straks niet meer te protocolleren in de afnemende applicatie. Ook kun je burgerverzoeken in het kader van de AVG beter en sneller afhandelen door de logginggegevens te verrijken met de informatie uit je verwerkingsregister.

Voor het verzamelen, opslaan en analyse van de logging kun je bijvoorbeeld gebruik maken van de ELK (Elastic search, Logstash en Kibana), Stack, Splunk, LogRhythm, Graylog, etc.

## Identity Provider (IP)
Voor het authenticeren van de eindgebruiker waarin de claims voor het gebruik van de API van alle gebruikers van jouw gemeente centraal zijn vastgelegd.

Nadat de Identity provider heeft vastgesteld wie de ingelogde gebruiker is en welke applicatie de API namens de gebruiker wil bevragen, kunnen tokens (al dan niet met gebruikersclaims) aan client applicaties worden verstrekt.

Hiermee kan de client (SaaS)applicatie namens de gebruiker de {{apiname}} bevragen.
