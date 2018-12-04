'use strict';
var carro = 'Fusca';
function mostrarCarro() {
  console.log(carro);
}

mostrarCarro();
console.log(carro);

const semana = 'Sexta';
console.log(semana);

const data  = {
  ano: 2018,
  mes: 'Dezembro'
}

// Por qual motivo o código abaixo retorna com erros?
const marca = 'Fiat';
let portas = 4;
{
  var cor = 'preto';
}
console.log(cor, marca, portas);

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x + dois;
}
somarDois(4);
dividirDois(6);

// O que fazer para total retornar 500?
const numero = 50;

for(numero; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
