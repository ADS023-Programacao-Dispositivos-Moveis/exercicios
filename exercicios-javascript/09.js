//1 - Objeto Livro
Livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    editora: "Editora Moderna",
    ano: 1954,
}

//2 - Desestruture o titlo e o autor do objeto Livro
let {titulo, autor} = Livro;
console.log(titulo);



//3 - Crie uma função que receba um objeto livro e retorne uma string com o titulo e o autor
function livroString(livro) {
    return `${livro.titulo} escrito por ${livro.autor}`;
}

const meuLivro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien"
  };
  
const stringDoLivro = livroString(meuLivro);
console.log(stringDoLivro);
