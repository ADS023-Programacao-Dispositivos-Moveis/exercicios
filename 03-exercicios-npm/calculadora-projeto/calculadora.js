export const soma = (a,b) => a + b;
export const subtracao = (a,b) => a - b;
export const multiplicacao = (a,b) => a * b;
export const divisao = (a, b) => {
    if (b === 0) {
        throw new Error("Não existe divisão por 0");
    }
    return a / b;
};