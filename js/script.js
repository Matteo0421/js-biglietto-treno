//1
const kmPercorsi = prompt('Inserisci il numero di km da percorrere');


//2
const etaPasseggero = prompt('Quanti anni hai?')

console.log (kmPercorsi, etaPasseggero)

//3
const costoKm = 0.21;

const scontoMinori = 0.20;

const scontoOver65 = 0.40;

let scontoBiglietto, messaggio ;


//4

const bigliettoIntero = (kmPercorsi * costoKm) ;

console.log (bigliettoIntero);

//5
if(etaPasseggero<18){
  scontoBiglietto = bigliettoIntero * scontoMinori ;
  messaggio = 'Avete diritto ad una promozione perche siete clienti under18, quindi sara applicato uno sconto del 20% sul prezzo del biglietto intero. Quindi il nuovo costo è di';
}else if (etaPasseggero>65){
   scontoBiglietto = bigliettoIntero * scontoOver65;
  messaggio = 'Avete diritto ad una promozione perche siete clienti over65, quindi sara applicato uno sconto del 40% sul prezzo del biglietto intero. Quindi il nuovo costo è di';
}else{
  
}


const bigliettoScontato = (bigliettoIntero - scontoBiglietto);


console.log (scontoBiglietto);
console.log (bigliettoScontato);

//6
// document.getElementById('output').innerHTML = `
// <p> Il prezzo del tuo biglietto ha il costo di € ${bigliettoIntero} <br>
// ${messaggio} ${bigliettoScontato} 
// `

if(typeof risultato !== 'undefined') {
  document.getElementById('output').innerHTML = `
  <p> Il prezzo del tuo biglietto ha il costo di € ${bigliettoIntero} <br>
  ${messaggio} ${bigliettoScontato} 
  `
} else {
  document.getElementById('output').innerHTML = `
  <p> Il prezzo del tuo biglietto ha il costo di € ${bigliettoIntero} ;
  `
}
