# Geen/null/false waarde, leeg object waarde en standaard waarde

Om de payload van een response klein te houden, worden velden in de volgende situaties niet opgenomen in het antwoord:

- niet gevraagde velden. Deze velden worden niet geleverd.
- gevraagde velden die de gevraagde persoon niet heeft. Deze velden worden niet geleverd. Voorbeeld: naam.voorvoegsel veld wordt gevraagd voor een persoon die geen voorvoegsel in zijn naam heeft.
- gevraagde velden hebben de _false_ waarde. Voorbeeld: indicatieCurateleRegister veld wordt gevraagd voor een persoon die niet onder curatele is gesteld.
- gevraagde velden is een groep velden die de persoon niet heeft. Voorbeeld: verblijfstitel velden wordt gevraagd voor een persoon die geen verblijfstitel heeft
- gevraagde velden heeft de __standaard__ waarde. In de BRP wordt de standaard waarde gebruikt om aan te geven dat een gegeven onbekend is. Voorbeeld: geboorte.plaats veld wordt gevraagd voor een persoon waarvan de geboorteplaats onbekend is
- gevraagde velden hebben geen aanduiding "in onderzoek".
