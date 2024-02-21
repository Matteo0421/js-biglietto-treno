//1
const kmPercorsi = prompt('Inserisci il numero di km da percorrere');


//2
const etaPasseggero = prompt('Quanti anni hai?')

console.log (kmPercorsi, etaPasseggero)

//3
const costoKm = 0.21;

const scontoMinori = 0.20;

const scontoOver65 = 0.40;

let scontoBiglietto, bigliettoScontato;


//4

const bigliettoIntero = (kmPercorsi * costoKm) ;

console.log (bigliettoIntero);

//5
document.getElementById('output').innerHTML = `
<p> Il prezzo del tuo biglietto ha il costo di € ${bigliettoIntero.toFixed(2)} 
`

if(etaPasseggero<18){
  scontoBiglietto = bigliettoIntero * scontoMinori ;
  bigliettoScontato = (bigliettoIntero - scontoBiglietto);
  
  document.getElementById('output').innerHTML += `
  Avete diritto ad una promozione perche siete clienti under18, quindi sara applicato uno sconto del 20% sul prezzo del biglietto intero. Quindi il nuovo costo è di ${bigliettoScontato.toFixed(2)} €
`
}else if (etaPasseggero>=65){
  scontoBiglietto = bigliettoIntero * scontoOver65;
  bigliettoScontato = (bigliettoIntero - scontoBiglietto);

  document.getElementById('output').innerHTML += `
  Avete diritto ad una promozione perche siete clienti over65, quindi sara applicato uno sconto del 40% sul prezzo del biglietto intero. Quindi il nuovo costo è di ${bigliettoScontato.toFixed(2)} €
`
};

console.log (scontoBiglietto);
console.log ( bigliettoScontato);
