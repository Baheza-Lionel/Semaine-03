// Exercice 1: affiche Hello World dans une boite de dialogue alert();
const Greeting = 'Hello World';
console.log(Greeting);
window.alert('Greeting');
// Exercice 2: Place ton code précédent en commentaire, dans un prompt, demande son prénom à l'utilisateur, ensuite, à l'aide d'un alert() affiche "Salut" + le prénom de l'utilisateur
let greeting = prompt('Hello World');
console.log(Greeting);
let whatsYourName = prompt("comment t'appelles-tu?", 'ex: Lionel');
console.log(whatsYourName);
let greet = 'Salut';
let name = "Lionel"
console.log(greet, name);
window.alert("Salut" + " " + "Lionel");
// Exercice 3: Place ton code précédent en commentaire. Dans un prompt, demande son âge à l'utilisateur, ensuite, à l'aide d'un .confirm() vérifie si l'âge de l'utilisateur est bien supérieur à 18 ans, si oui, demande à l'utilisateur de confirmer son âge et affiche "Bienvenue" dans une alert()

let howOldareYou = prompt(' Quel âge avez-vous?');
console.log(howOldareYou);
window.alert("Bienvenu");
if (window.confirm("Êtes-vous inférieur de 18 ans?"))
  window.alert("Confirmer votre âge")
else (window.confirm("Êtes-vous supérieur de 18 ans"))
window.alert("Bienvenu");

