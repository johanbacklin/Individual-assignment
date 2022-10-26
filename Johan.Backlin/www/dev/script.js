function getContentFromApi(filename, selector) {
  fetch("http://localhost:3000/api/content/" + filename)
    .then((response) => (response = response.json()))
    .then((content) => {
      console.log(content);
      document.querySelector(selector).innerHTML = marked.parse(content.data); // marked är ett externt bibliotek som hanterar markdown filer (.md)
      hljs.highlightAll(); // hljs (highlight.js) ger syntax-highlight i <code>-taggar.
    });
}
function getUsers() {
  fetch("http://localhost:3000/api/users/")
    .then((response) => (response = response.json()))
    .then((users) => {
      console.log(users);
    });
}
getUsers();

//##KOD1
//document.queryselector är till för att hämta element från html
const btnClear = document.querySelector(".btnClear"); //Hämtar data från btnClear funktionen
const btn1 = document.querySelector(".btn1"); //
const btn2 = document.querySelector(".btn2");
const output = document.querySelector(".output"); //Hämtar data från url
const url =
  "c35b1ee217740ad0bf99dd6c056bba8a093c9cd3bca876dbb6aa9a31788cc3e0.json"; //Sparar url i en variabel

const output2 = document.querySelector(".output2"); //Hämtar data från url
//Klasslista knappen
btn1.onclick = () => {
  output.innerHTML = "OPSIE";
  getData(); //Anropar funktionen getData
};
//Lärar knappen
btn2.onclick = () => {
  output2.innerHTML = "OPSIE"; //Ändrar texten i output om datan inte skulle komma fram.
  getData2(); //Anropar funktionen getData
};
//CLEAR KNAPPEN
btnClear.onclick = () => {
  //Arrow function
  output3.innerHTML = "";
  output2.innerHTML = ""; //Ändrar texten i output2 till tom sträng så sidan blir tom
  output.innerHTML = "";
};

function getData() {
  fetch(url) //fetching data from url
    .then((response) => response.json()) //Konverterar till json
    .then((data) => {
      //data är json
      //Anropar funktionen outData och skickar med data som parameter
      outData(
        data.classList.sort(
          (
            a,
            b // Sorterar arrayen efter förnamn
          ) =>
            a.firstname !== b.firstname
              ? a.firstname < b.firstname
                ? -1
                : 1
              : 0 //Om a.firstname inte är lika med b.firstname så returneras -1 annars 1 och om de är lika med varandra så returneras 0
        )
      );
    });
}

function outData(val) {
  let html = ""; //Skapar en tom sträng, för att sen kunna ge den ett värde
  val.forEach((val, firstname) => {
    if (firstname === 10) return; //Om firstname är lika med 10 så returneras det
    html += `<ul>${val.firstname} ${val.lastname}</ul>`; //Anävnder ul för att det ska se bättre ut i outputen
  });
  //Loopar igenom arrayen, foreach är en loop som används för att loopa igenom arrayen
  output.innerHTML = html;
}
//Ändrar texten i output knappen

//##KOD2
//LÄRAR KNAPPEN SOM SKRIVER UT ENBART ARRAYINDEX 10 OM INTE FIRSTNAME ÄR LIKA MED 10
function getData2() {
  fetch(url) //fetching data from url
    .then((response) => response.json()) //Konverterar till json
    .then((data) => {
      //data är json
      //Anropar funktionen outData och skickar med data som parameter
      outData2(data.classList); //Skickar data vidare till outData
    });

  function outData2(val) {
    let html = "";
    val.forEach((val, firstname) => {
      if (firstname != 10) return; //Om firstname inte är lika med 10 så returneras det
      html += `${val.firstname} ${val.lastname} är läraren i Frontend 1 WEBB22!
     <a href="http://127.0.0.1:5500/Johan.Backlin/www/public/teachers-lounge/index.html">Lärarrummet</a>
        </a>`; //Använder a-tagg för att göra en länk till lärarrummet i outputen.
    });
    output2.innerHTML = html;
  }
}

//##KOD3 - RANDOM PERSON
const btnRandom = document.querySelector(".btnRandom");
const output3 = document.querySelector(".output3");
const url3 =
  "c35b1ee217740ad0bf99dd6c056bba8a093c9cd3bca876dbb6aa9a31788cc3e0.json";

btnRandom.onclick = () => {
  output3.innerHTML = "OPSIE"; //Ändrar texten i output
  randomPerson(); //Anropar funktionen randomPerson
};

function randomPerson() {
  fetch(url3) //fetching data from url
    .then((response) => response.json()) //Konverterar till json
    .then((data) => {
      //data är json
      //Anropar funktionen outData och skickar med data som parameter
      outData3(data.classList); //Skickar data vidare till outData
    });
}

//SLUMPMÄSSIG ELEV
//Funktionen randomPerson skapar en slumpmässig elev ut efter förnamn
function outData3(val) {
  let html = "";
  let random = Math.floor(Math.random() * val.length); //Randomiserar en elev ur .json filen. Med Math.floor och Math.random, Sedan går den igenom hela arrayenslängd.
  for (let i = 0; i < val.length; i++) {
    // for-loopen går igenom arrayen och skriver ut en slumpmässig elev så länge i är mindre än arrayens längd, sedan ökar den med i++ för varje gång den går igenom loopen.
    //
    if (i === random) {
      //Om i är lika med random så returneras det
      html += `Hej!
        Mitt namn är ${val[i].firstname} ${val[i].lastname} och här är mitt<a href="https://www.github.com/${val[i].github}">github-konto</a>!`;
    } //Skriver ut en slumpmässig elev från arrayen med hjälp av randomiseraren. och skriver ut namn och github-kontosnamn. Som ligger i en a-tag.
  }
  output3.innerHTML = html;
}
