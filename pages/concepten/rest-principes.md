## REST
 
De BRP API is ontworpen conform de REST principes. Om te kunnen voldoen aan de Algemene Verordening Gegevensbescherming (AVG) zijn concessies gedaan aan de toepassing van de REST principes. De belangrijkste is [het gebruik van de POST methode](https://cwe.mitre.org/data/definitions/598.html) in plaats van de GET methode om persoonsgegevens te bevragen. Zo wordt voorkomen dat er geen [persoonlijk identificeerbare informatie (PII)](https://piwikpro.nl/blog/pii-niet-pii-en-persoonsgegevens/) terecht komt in de URL van een request, en daardoor in serverlogs.
