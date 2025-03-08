const frutas = ["Maça", "Banana", "Abacaxi", "Laranja"];

//1 - Converta dodas as strings em maiusculas
function converterParaMaiusculo(frutas) {
    let frutasMaiusculas = [];
    for (let i = 0; i < frutas.length; i++) {
        frutasMaiusculas.push(frutas[i].toUpperCase());
    }
    return frutasMaiusculas;
}

console.log(converterParaMaiusculo(frutas));

//2 - Filtre as strings que começam com a letra 'A'
function filtrarFrutasComA(frutas) {
    let frutasComA = [];
    for (let i = 0; i < frutas.length; i++) {
        if (frutas[i].startsWith("A")) {
            frutasComA.push(frutas[i]);
        }
    }
    return frutasComA;
}

console.log(filtrarFrutasComA(frutas));

//3 - Crie um novo array com o comprimento de cada string
function comprimentoFrutas(frutas) {
    let comprimentos = [];
    for (let i = 0; i < frutas.length; i++) {
        comprimentos.push(frutas[i].length);
    }
    return comprimentos;
}

console.log(comprimentoFrutas(frutas));