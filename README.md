# Individual-assignment

FRONTEND 1: INDIVIDUELL UPPGIFT

Detta är min individuella uppgift och den är gjord för den personen som vill få ut en sorterad klasslista utefter förnamn, få ut läraren ur klasslistan men också till den personen som vill få ut en slumpmässig person ur klasslistan och se deras githubkonto. Den är uppbyggd på npm-modulen som hjälper dig starta en egen http:server. Själva uppgiften använder jag mig av utav html,css,javascript sedan själva klasslistan ligger i en .json-fil.

START UP

KÖR DU VIA TERMINALEN I VS-CODE

Se till att du är i rätt katalog. - ls (för att se vart du är i menyn) - cd Johan.Backlin (för att ligga i rätt katalog, annars kan du få fel meddelanden som att du är i fel reposotory)

När du är i rätt katalog så kan du skriva i terminalen:

   $ npm install
   $ npm run server
Då ska npm-modulen starta en http:3000 server åt dig. Så kommer du få tillgång till min hemsida där repot finns.

PÅ WEBBEN

Du kommer först få fram första sidan (HOME). Du kommer sen kunna välja "sida" Home eller About. About är där själva koden finns. Kommer finnas 4 knappar att förhålla sig till. Följer du vad som står på knapparna så kommer du få outputs.

KOD - BTN - KLASSLISTA UTAN LÄRARE.

Som grund har jag använt mig av en .json fil. Sedan har jag sorterat ut lite efter min problematik. Jag har använt mig av en metod som heter fetch som gör om .jsondatan till ett mer användingsimpelt material. Sedan har jag använt mig av den datan. Jag såg ett stort behov av att kunna se hela klasslistan i bokstavsordning. Så jag sorterade hela listan med hjälp av

classList.sort() metoden
för att sortera in klasslistan. Jag använde mig av en foreach loop som har till uppgift att loopa igenom hela arraylistan som vi använde i .json filen. Sedan skriva ut både förnamn och efternamn som sen innan redan var sorterat av .sort. Jag kopplade den outputen till en knapp "btn1" för att datan ska bli utskriven på sidan.

Sedan gjorde jag en ifstats som ska filtrera bort indexnummer 10 i array listan. Eftersom jag inte vill ha med läraren när klasslistan skrevs ut.

KOD - BTN2 - Utsorterad klasslista med enbart lärare

Fick göra en ny fetch för jag kom inte riktigt på hur man skulle ta sig till väga utan att göra det när man vill använda fetchen flera gånger. Sedan har jag använt mig av samma pricip som i koden innan. Skilnaden var att jag inte sorterade ut efter förnamn. Jag använde mig av if-statement och kollade om jag fick fram rätt indexnummer.

 if (firstname != 10) return
Så nu returnerar den ut alla som inte har indexnummer 10 från .json-datan man har använt. I outputen så finns även en

<a href = ""></a>
Som är kopplad till "/Johan.Backlin/www/public/teachers-lounge/index.html"
KOD BTN3 - Slumpmässig elev

Gör en fetch igen så man får ner datan till outputen man gör sen. Sedan använder jag mig av en for-loop som loopar en ny person hela tiden från array-listan

let random = Math.floor(Math.random() * val.length);
Använder sig av Math.floor som avrundar till närmsta heltal och Math.random som använder värdet ur variabeln random. Sedan går man igenom hela arraylistan med .length

$for (let i = 0; i < val.length; i++)
For-loopen använder gör så att så länge "i" är mindre än "val.lenght" så går den igenom loopen i++ kan man skriva i = i + 1 den ökar alltså med 1 för varje gång loopen går igenom

if (i === random)
Sedan blir det ett ifstatement ...om i är lika med random så skickas det ut en slumpperson från listan. med outputen

Mitt namn är ${val[i].firstname} ${val[i].lastname} och här är mitt<a href="https://www.github.com/${val[i].github}">github-konto</a>!`; Som gör att du kommer kunna klicka på länken och så blir du skickad till dears githubkonto på github.
BTN CLEAR

Den fjärde knappen använde jag mig till att rensa sidan från outputs. Så det är en tom sträng som skrivs ut på sidan, så det försvinner och är kopplad till alla knappar och deras output.

 output3.innerHTML = "";
 output2.innerHTML = "";
 output.innerHTML = "";
OM MAN SKULLE VILJA ANVÄNDA KODEN TILL NÅGOT ANNAT.

Enklast möjligast så skulle man bara ändra värdena i script.js Exempel om man skulle vilja skriva ut alla discord-namn istället för github.

if (i === random) {
html += `Hej! $ Mitt namn är ${val[i].firstname} ${val[i].lastname} och här är mitt<a href="https://www.discord.com/${val[i].$discord}">discord-konto</a>!`;
{val.[i].discord}
istället för
{val.[i].github}
Lösning 2

Man skulle även kunna sortera efter gruppnummer.

outData(
data.classList.sort(
(
a,
b // Sorterar arrayen efter vilknen grupp de har varit i.
) =>
a.belongsTo !== b.belongsTo
? a.belongsTo < b.belongsTo
? -1
: 1
: 0 //Om a.belongsTo inte är lika med b.belongsTo så returneras -1 annars 1 och om de är lika med varandra $så returneras 0
Sedan ändrar du
$ html += `<ul>Grupp.${val.belongsTo} ${val.firstname} ${val.lastname}</ul>`;
Så kommer det skrivas ut vilken grupp dem varit i.
Vill man utveckla det ännu mera. Skulle man kunna koppla varje knapp till en specifik grupp. Så kommer enbart den gruppen att komma ut i outputen.FRONTEND 1: INDIVIDUELL UPPGIFT

Detta är min individuella uppgift och den är gjord för den personen som vill få ut en sorterad klasslista utefter förnamn, få ut läraren ur klasslistan men också till den personen som vill få ut en slumpmässig person ur klasslistan och se deras githubkonto. Den är uppbyggd på npm-modulen som hjälper dig starta en egen http:server. Själva uppgiften använder jag mig av utav html,css,javascript sedan själva klasslistan ligger i en .json-fil.

START UP

KÖR DU VIA TERMINALEN I VS-CODE

Se till att du är i rätt katalog. - ls (för att se vart du är i menyn) - cd Johan.Backlin (för att ligga i rätt katalog, annars kan du få fel meddelanden som att du är i fel reposotory)

När du är i rätt katalog så kan du skriva i terminalen:

   $ npm install
   $ npm run server
Då ska npm-modulen starta en http:3000 server åt dig. Så kommer du få tillgång till min hemsida där repot finns.

PÅ WEBBEN

Du kommer först få fram första sidan (HOME). Du kommer sen kunna välja "sida" Home eller About. About är där själva koden finns. Kommer finnas 4 knappar att förhålla sig till. Följer du vad som står på knapparna så kommer du få outputs.

KOD - BTN - KLASSLISTA UTAN LÄRARE.

Som grund har jag använt mig av en .json fil. Sedan har jag sorterat ut lite efter min problematik. Jag har använt mig av en metod som heter fetch som gör om .jsondatan till ett mer användingsimpelt material. Sedan har jag använt mig av den datan. Jag såg ett stort behov av att kunna se hela klasslistan i bokstavsordning. Så jag sorterade hela listan med hjälp av

classList.sort() metoden
för att sortera in klasslistan. Jag använde mig av en foreach loop som har till uppgift att loopa igenom hela arraylistan som vi använde i .json filen. Sedan skriva ut både förnamn och efternamn som sen innan redan var sorterat av .sort. Jag kopplade den outputen till en knapp "btn1" för att datan ska bli utskriven på sidan.

Sedan gjorde jag en ifstats som ska filtrera bort indexnummer 10 i array listan. Eftersom jag inte vill ha med läraren när klasslistan skrevs ut.

KOD - BTN2 - Utsorterad klasslista med enbart lärare

Fick göra en ny fetch för jag kom inte riktigt på hur man skulle ta sig till väga utan att göra det när man vill använda fetchen flera gånger. Sedan har jag använt mig av samma pricip som i koden innan. Skilnaden var att jag inte sorterade ut efter förnamn. Jag använde mig av if-statement och kollade om jag fick fram rätt indexnummer.

 if (firstname != 10) return
Så nu returnerar den ut alla som inte har indexnummer 10 från .json-datan man har använt. I outputen så finns även en

<a href = ""></a>
Som är kopplad till "/Johan.Backlin/www/public/teachers-lounge/index.html"
KOD BTN3 - Slumpmässig elev

Gör en fetch igen så man får ner datan till outputen man gör sen. Sedan använder jag mig av en for-loop som loopar en ny person hela tiden från array-listan

let random = Math.floor(Math.random() * val.length);
Använder sig av Math.floor som avrundar till närmsta heltal och Math.random som använder värdet ur variabeln random. Sedan går man igenom hela arraylistan med .length

$for (let i = 0; i < val.length; i++)
For-loopen använder gör så att så länge "i" är mindre än "val.lenght" så går den igenom loopen i++ kan man skriva i = i + 1 den ökar alltså med 1 för varje gång loopen går igenom

if (i === random)
Sedan blir det ett ifstatement ...om i är lika med random så skickas det ut en slumpperson från listan. med outputen

Mitt namn är ${val[i].firstname} ${val[i].lastname} och här är mitt<a href="https://www.github.com/${val[i].github}">github-konto</a>!`; Som gör att du kommer kunna klicka på länken och så blir du skickad till dears githubkonto på github.
BTN CLEAR

Den fjärde knappen använde jag mig till att rensa sidan från outputs. Så det är en tom sträng som skrivs ut på sidan, så det försvinner och är kopplad till alla knappar och deras output.

 output3.innerHTML = "";
 output2.innerHTML = "";
 output.innerHTML = "";
OM MAN SKULLE VILJA ANVÄNDA KODEN TILL NÅGOT ANNAT.

Enklast möjligast så skulle man bara ändra värdena i script.js Exempel om man skulle vilja skriva ut alla discord-namn istället för github.

if (i === random) {
html += `Hej! $ Mitt namn är ${val[i].firstname} ${val[i].lastname} och här är mitt<a href="https://www.discord.com/${val[i].$discord}">discord-konto</a>!`;
{val.[i].discord}
istället för
{val.[i].github}
Lösning 2

Man skulle även kunna sortera efter gruppnummer.

outData(
data.classList.sort(
(
a,
b // Sorterar arrayen efter vilknen grupp de har varit i.
) =>
a.belongsTo !== b.belongsTo
? a.belongsTo < b.belongsTo
? -1
: 1
: 0 //Om a.belongsTo inte är lika med b.belongsTo så returneras -1 annars 1 och om de är lika med varandra $så returneras 0
Sedan ändrar du
$ html += `<ul>Grupp.${val.belongsTo} ${val.firstname} ${val.lastname}</ul>`;
Så kommer det skrivas ut vilken grupp dem varit i.
Vill man utveckla det ännu mera. Skulle man kunna koppla varje knapp till en specifik grupp. Så kommer enbart den gruppen att komma ut i outputen.
