let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//1 - Filtre os números pares
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);

//2 - Multiplique cada número por 2
let dobro = numeros.map(numero => numero * 2);
console.log(dobro);

//3 - Some todos os números
let soma = numeros.reduce((total, numero) => total + numero, 0);
console.log(soma);