/* Ciao ragazzi,
Esercizio di oggi: *FizzBuzz*
nome repo: js-fizzbuzz
*Consegna:*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
*Prima di partire a scrivere codice poniamoci qualche domanda:*
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
*Consigli del giorno:*
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: */



//Creo un for che con ta fino a cento e ad ognoi giro controllo il valore di i se è 3/5 o entrambi tramite if ed in caso stampo la parola corrispondente

for (i = 1; i <= 100; i++){
    
    if (i % 3 === 0 && i % 5 === 0){
        //Controllo per prima cosa se il valore è multiplo sia di 3 che di 5 perche raggionando a cascata se dovesse essere vera prima una delle due condizioni singole non entrerebbe in questa sezione
        console.log ("(" + i + ") FizzBuzz");
    } else if (i % 3 === 0){
        //Controllo se il numero è divisibile per 3 e stampo Fizz
        console.log ("(" + i + ") Fizz");
    } else if (i % 5 === 0){
        //Controllo se il numero è divisibile per 5 e stampo Buzz
        console.log ("(" + i + ") Buzz");
    } else{
        //Se tutte le condizioni precedenti sono falze stampo solamente il numero ricorrente del ciclo
        console.log (i);
    }
}