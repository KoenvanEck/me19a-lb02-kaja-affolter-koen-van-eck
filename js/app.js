/**
 * Webapp with Pagination
 */

/**
 * Deklaration der Variablen
 */
let index;
let traumziel = undefined;

/**
 * Ausgabe zeigen
 */
function showUI(){
    //Reiseort
    let htmlObj = document.getElementById("reiseort");
    htmlObj.innerHTML =
        `Hotel: ${traumziel.hotel}<br>`+
        `Ort: ${traumziel.ort}<br>`+
        `Preis: ${traumziel.preis}<br>`+
        `Land: ${traumziel.land}`;

    //Infos
    htmlObj = document.getElementById("infos");
    htmlObj.innerHTML =
        `Sterne: ${traumziel.infos.sterne}<br>`+
        `Telefon: ${traumziel.infos.phone}<br>`+
        `Email: ${traumziel.infos.email}<br>`+
        `Wifi: ${traumziel.infos.wifi}`;

    //Adresse
    htmlObj = document.getElementById("adresse");
    //clear
    htmlObj.innerHTML = "";
    //set
    traumziel.eigenschaften.adresse.forEach(adresse => {
        htmlObj.innerHTML += `${adresse}<br>`;
    });


    //Facilities
    htmlObj = document.getElementById("facilities");
    //clear
    htmlObj.innerHTML = "";
    //set
    traumziel.eigenschaften.facilities.forEach(facilities => {
        htmlObj.innerHTML += `${facilities}<br>`;
    });

    //Index im Pagination-Element zeigen
    htmlObj = document.getElementById("showIndex");
    //clear
    htmlObj.innerHTML = "";
    //set
    htmlObj.innerHTML = index;
}


/**
 * Nächster Eintrag (Record) zeigen
 */
function showNext() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (traumzielListe.length-1 > index){
            index++;
        }
    }
    localStorage.setItem("index", index);
    traumziel = traumzielListe[index];
    // Zeige den Eintrag
    showUI();
}

/**
 *  Vorhergehender Eintrag (Record) zeigen
 */
function showPrevious() {
    index = localStorage.getItem("index");
    console.log(index);
    if (index == undefined){
        index = 0;
    } else {
        if (index > 0){
            index--;
        }
    }
    localStorage.setItem("index", index);
    traumziel = traumzielListe[index];
    // Zeige den Eintrag
    showUI();
}

//start app
//Falls der index nicht definiert ist ...
if (traumziel === undefined){
    //... dann setze den index auf 0 (Anfang)
    index = 0;
    //speichere wieder den index im Browser-Speicher
    localStorage.setItem("index", index);
    //hole den nächst höheren Eintrag
    traumziel = traumzielListe[index];
    //zeige den Eintrag
    showUI();
}

