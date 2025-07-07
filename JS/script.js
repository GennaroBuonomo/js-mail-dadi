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