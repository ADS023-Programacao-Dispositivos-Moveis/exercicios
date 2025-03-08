//construa um objeto pessoa com nome, idade e cidade
Pessoa = {
    nome: "Sérgio Silva",
    idade: 40,
    cidade: "Brasília"
}

//Adicione uma nova propriedade ao objeto pessoa com o nome de "profissão" e o valor "Desenvolvedor"
Pessoa.profissao = "UX Designer";

//Remova a propriedade idade do objeto pessoa
delete Pessoa.idade;

//Liste todas as propriedades do objeto pessoa
console.log(Pessoa);