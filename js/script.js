//EMAIL=====================
//creo una lista di accesso
//chiedo email all'utente
//verfico che la mail sia nella lista
//concedo o nego l'accesso

var listaEmailApprovate = ["simone@bool.yup", "marco@bool.yup", "marzia@bool.yup", "stefania@bool.yup"];
var emailInserita = prompt("Inserisci la tua email per accedere. P.S. Prova con simone@bool.yup");

if (listaEmailApprovate.includes(emailInserita)) {
    console.log("Puoi accedere.");
    //DADI===================
    //etsraggo numero (A) ---> utente
    //estraggo numero (B) ---> PC
    //confronto i due numeri (A) e (B)
    //assegno la vittoria al maggiore
    //oppure cosnidero il pareggio
    var numA = Math.floor((Math.random() * 6) + 1);
    console.log(numA);
    var numB = Math.floor((Math.random() * 6) + 1);
    console.log(numB);

    if (numA > numB) {
        console.log(emailInserita + " HAI VINTO!");
    }
    else if
        (numB > numA){
        console.log("MI DISPIACE " + emailInserita + " HAI PERS0.");
        }
    else {
        console.log("Questo è un pareggio. Rilancia il dado.");
    }

} else{
    alert("Attenzione! Non sei un utente registrato.");
}
