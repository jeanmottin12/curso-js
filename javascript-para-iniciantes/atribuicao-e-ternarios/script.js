var x = 5;
var y = 10;

x += 10; // x = x + 10;
console.log(x);

var idade = 20;
var naoPossuiDiabetes = true;

var podeBeber;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false;
console.log(podeBeber);

// Some 500 ao valor de scroll abaixo, atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500;

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa) ? true : false;
// if (possuiCasa === true && possuiCarro === true)
//   darCredito = true;
// else
//   darCredito = false;
