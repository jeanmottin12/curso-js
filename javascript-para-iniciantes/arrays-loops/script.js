var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === 'PS4') {
    break;
  }
}

var frutas = ['Banana', 'Pera', 'Maçã', 'Abacaxi', 'Uva'];
frutas.forEach(function(fruta, index, array) {
  console.log(fruta, index, array);
});


// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copas = [1958, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copas.length; i++) {
  console.log(`O Brasil ganhou a copa de ${copas[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === 'Pera') {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
