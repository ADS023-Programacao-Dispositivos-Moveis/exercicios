let numeros = [10, 20, 30, 40, 50];

//1 - Adiconando número no final do array
numeros.push(60);
console.log("Adicionando um número no final: " + numeros);

//2 - Removendo o primeiro número do array
numeros.shift();
console.log("Removendo um número do início: " + numeros);

//3 - Encontre o maior número no array
let maiorNumero = Math.max(...numeros);
console.log("O maior número é: " + maiorNumero);

//4 - Encontre o menor número no array
let menorNumero = Math.min(...numeros);
console.log("O menor número é: " + menorNumero);