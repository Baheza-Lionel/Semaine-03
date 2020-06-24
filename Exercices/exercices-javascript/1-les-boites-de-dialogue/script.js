// Exercice 1: affiche Hello World dans une boite de dialogue alert();
const greeting = 'Hello world';
console.log(greeting);
window.alert('greeting');
// Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur
let Greeting = prompt('Hello world');
console.log(Greeting);
let whatsYourName = prompt("comment t'appelles tu?", 'ex: Lionel');
console.log(whatsYourName);
let greet = 'salut';
console.log(greet);
window.alert('salut' + '' + 'Lionel');
// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()
let howOldareYou = prompt(' quel âge avez-vous?');
console.log(howOldareYou);
if (window.confirm('element => element < 18')) {
  window.open('contact.html', 'Vous êtes redirigé vers la page de contact');
}
