// Exercice 1: A l'aide d'une boucle, affiche les chiffres de 0 à 100, place les chiffres dans un tableau que tu nommeras fizzBuzzArray, à l'aide de la méthode .push()
let fizzBuzzArray = [];
for (iterations = 0; iterations <= 100; iterations++) {
  console.log(iterations);
  fizzBuzzArray.push(iterations);
}
console.log(fizzBuzzArray);

// Exercice 2: Toujours à l'aide d'une boucle, passe sur chaque élément du tableau que tu viens de créer (fizzBuzzArray), si l'élément est divisible par trois affiche "fizz" dans la console, si l'élément est divisible par cinq affiche "buzz", si il est divisible par trois et par cinq affiche "fizzBuzz"
fizzBuzzArray.forEach(element => {
  if (element % 3 === 0 && element % 5 === 0) {
    console.log('fizzBuzzArray');
  } else if (element % 3 === 0) {
    console.log('fizz');
  } else if (element % 5 === 0) {
    console.log('buzz');
  }

});

// Exercice 3: A l'aide de l'objet Date (voir: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date) affiche tous les vendredi 13 de l'année 2020
