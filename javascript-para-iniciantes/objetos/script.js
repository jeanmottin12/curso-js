var pessoa = {
    nome: "Jean",
    idade: 23
}

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  }
}

var menu = {
  width: 800,
  height: 60,
  backgroundColor: '#000',
  metadeHeight() {
    return this.height / 2;
  }
}

var bg = menu.backgroundColor;

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'Jean',
  sobrenome: 'Mottin',
  idade: 23,
  cidade: 'Colombo'
}

// Crie um método no objeto anterior, que mostre o seu nome completo
dadosPessoais.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa) {
    if (pessoa === 'homem') {
      return 'Latir';
    } else {
      return 'Nada';
    }
  }
}
