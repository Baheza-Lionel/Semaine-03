// Exercice 1: ajoute "Ted" au tableau suivant

let castArray = ['Robin', 'Barney', 'Lily', 'Marshal'];
castArray.push('Ted');
// Exercice 2: Affiche l'index de "Ted" dans le tableau dans la console
let index = castArray.findIndex(element => element === 'Ted');
console.log(index);
// Exercice 3: Affiche l'index de Robin dans le tableau dans la console
castArray.push('Robin');
let indexRobin = castArray.findIndex(element => element === 'Robin');
console.log(indexRobin);

// Exercice 4: retire "Robin" du tableau
castArray.shift();

// Exercice 5: retire "Ted" du tableau
castArray.pop();
console.log(castArray);
// Exercice 6: ajoute "Ted" et "Robin" au tableau
console.log(castArray.push('Ted', 'Robin'));

// Exercice 7: Affiche le nouvel index de Ted et Robin dans le tableau dans la console
console.log(index);
console.log(indexRobin);

// Exercice 8: à l'aide d'une boucle, affiche chaque élément du tableau dans la console
castArray.forEach(element => console.log(element));
// Exercice 9: à l'aide de la méthode .findIndex(), trouve l'index de Lily, ensuite, affiche Lily dans la console

let indexLily = castArray.findIndex(element => element === 'Lily');
console.log(indexLily);
// Exercice 10: à l'aide d'une boucle, multiplie par 2 chaque élément du tableau suivant, crée un nouveau tableau à l'aide de la méthode .push(), affiche le nouveau tableau dans la console

let multiplicationArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
multiplicationArray.forEach(element => console.log(element * 2));
multiplicationArray.push('multiplicationArray');
