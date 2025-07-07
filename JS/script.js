const emailslist = ['gennaro@gmail.com', 'maria@gmail.com', 'raimondo@gmail.com', 'patrizia@gmail.com', 'biagio@gmail.com']
const usermail = prompt ('Inserisci la tua email')

let check = false

for(let i=0; i<emailslist.length; i++){
  if(usermail === emailslist[i]){
    check = true
  }
}

if( check === true){
  console.log('email trovata')
}
else{
  console.log('email non trovata')
}

// Gioco dei Dati

const pcnumber = Math.floor(Math.random() * 6) + 1;
const usernumber = Math.floor(Math.random() * 6) + 1;

if(pcnumber > use){
  console.log(`Numero pc : ${pcnumber}, numero utente: ${usernumber}. Ha vinto il pc`)
}
else if(pcnumber < usernumber){
  console.log(`Numero pc ${pcnumber}, numero utente: ${usernumber}. Hai vinto`)
}
else{
  console.log('pareggio')
}