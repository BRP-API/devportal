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

## Jouw omgeving inrichten voor veilig gebruik van de {{apiname}}?
Om veilig te kunnen werken met API’s moet je drie zaken regelen:
- (Toegangs)beveiliging, autorisatie en filtering
- Logging- en protocollering voor controle achteraf en het voorkomen van misbruik
- Beheer van identiteiten, rollen en rechten 

Gemeenten bieden een breed palet aan producten en diensten die allemaal andere gegevens en informatieproducten nodig hebben. Daarvoor zetten zij verschillende taakapplicaties in, die worden gebruikt door medewerkers met verschillende rollen en rechten. Gemeenten moeten hiervoor zelf de toegangsbeveiliging en autorisatie organiseren. Zij hebben daarbij minimaal nodig:  
**1. Identity Provider (IP):**   
Voor het authenticeren van de eindgebruiker waarin de claims voor het gebruik van de API van alle gebruikers van jouw gemeente centraal zijn vastgelegd. Nadat de Identity provider heeft vastgesteld wie de ingelogde gebruiker is en welke applicatie de API namens de gebruiker wil bevragen, kunnen tokens (al dan niet met gebruikersclaims) aan client applicaties worden verstrekt. Hiermee kan de client (SaaS)applicatie namens de gebruiker de API bevragen.  
**2. Security Token Service (STS)**  
Voor het uitgeven, valideren, vernieuwen en beëindigen van security tokens en het veilig identificeren van een client (SaaS) applicatie. Hoort bij de Identity Provider.33. API Gateway: (toegangs)beveiliging van de API’s.
**3. API Gateway**  
Voor de (toegangs)beveiliging van de API’s. Een API Gateway is vaak onderdeel van een product voor ‘full life cycle API Management’. Een API Gateway bevat ondersteuning voor het design, publiceren, documenteren, beveiligen en analyseren van API’s. Een API Gateway is een must have voor iedere gemeente die gevoelige API’s aan afnemers aanbiedt.  
**4. Proxy of een ‘facade’**  
Voor autorisatie op detailniveau. Dit kun je bijvoorbeeld regelen in jouw API Gateway, zoals [in dit voorbeeld van de gemeente Amsterdam](https://github.com/Amsterdam/haal-centraal-proxy). 
