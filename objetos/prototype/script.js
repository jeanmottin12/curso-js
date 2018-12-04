// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }
//
// Pessoa.prototype.andar = function() {
//   return this.nome + ' Pessoa andou';
// }
//
// const jean = new Pessoa('Jean', 23);
//
// // console.log(Pessoa.prototype);
// // console.log(jean.prototype);
//
// const pais = 'Brasil';
// const cidade = new String('Rio');
//
// const lista = document.querySelectorAll('li');
//
// const listaArray1 = Array.prototype.slice.call(lista);
// const listaArray2 = Array.from(lista);
//
// const listaAnimais = ['cachorro', 'gato', 'cavalo'];
//
//
// const Carro = {
//   marca: 'Ford',
//   preco: 2000,
//   andar() {
//     return true;
//   }
// }


function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const jean = new Pessoa('Jean', 'Mottin');


Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)
