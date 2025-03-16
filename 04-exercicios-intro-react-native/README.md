# Exercícios - Introdução a React Native

### Exercício Prático: Criando um Módulo de Calculadora e Utilizando Moment.js

## Objetivo

Neste exercício, você criará um módulo de calculadora e utilizará a biblioteca Moment.js para
calcular a idade de uma pessoa. O projeto deve ser criado dentro da pasta exercicios . Você
praticará a criação de módulos, importação de bibliotecas e manipulação de datas no JavaScript.

#### Passos
## Atividade 1: Criando um Módulo de Calculadora

### 1: Crie um novo projeto Node.js: No terminal, execute o comando:

- [x] `mkdir calculadora-projeto`
- [x] `cd calculadora-projeto`
- [x] `npm init -y`

### 2: Defina o tipo de módulos do projeto: No arquivo para definir o tipo de módulos como ESM:

- [x] `"type": "module"`


### 3: Crie o módulo de calculadora: Dentro da pasta do projeto, crie um arquivo chamado calculadora.js , adicione as funções para as operações de soma, subtração, divisão e multiplicação e utilize o comando de export para exportar as funções.

### 4: Crie o arquivo index.js : No mesmo diretório, crie um arquivo chamado index.js e importe o módulo de calculadora para realizar alguns cálculos:

- [x] `import { soma, subtracao, multiplicacao, divisao } from './calculadora.js';`

`console.log("Soma: ", soma(10, 5));`
`console.log("Subtração: ", subtracao(10, 5));`
`console.log("Multiplicação: ", multiplicacao(10, 5));`
`console.log("Divisão: ", divisao(10, 5));`

- [x] `Utilize a idade 70 para os testes.`

### 5: Configure o npm start: No arquivo npm start: package.json , adicione o seguinte script para configurar o npm start:

- [x] `"scripts": {"start": "node index.js"}`


### 6: Execute o projeto: No terminal, execute o comando:

- [x] `npm start`

## Atividade 2: Utilizando Moment.js para Calcular Idade
### 1: Instale a biblioteca Moment.js: No terminal, execute o comando:

- [x] `npm install moment`

### 2: Modifique o arquivo index.js : Importe a biblioteca Moment.js e adicione o código para calcular a idade de uma pessoa baseada no ano de nascimento:

- [x] `import moment from 'moment';`

function calcularIdade(anoNascimento) {
     // implemente a lógica para calcular a idade
}
     const anoNascimento = 1990;
     const idade = calcularIdade(anoNascimento);
     console.log(`Idade: ${idade} anos
`);

### 3: Execute o projeto: No terminal, execute o comando:

- [x] `npm start`