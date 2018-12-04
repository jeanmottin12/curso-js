// const carros = ['Ford', 'Fiat', 'Honda'];
//
// carros.forEach((item, index, array) => {
//   console.log(item, index, array);
// });

// const li = document.querySelectorAll('li');
//
// li.forEach((i) => i.classList.add('active'));
//
// const carros = ['Ford', 'Fiat', 'Honda'];
//
// const novaArray = carros.map((item, index, array) => {
//   console.log(item, index, array);
//   return item;
// });
//
// console.log(novaArray);

// const aulas = [
//   {
//     nome: 'HTML 1',
//     min: 15
//   },
//   {
//     nome: 'HTML 2',
//     min: 10
//   },
//   {
//     nome: 'CSS 1',
//     min: 20
//   },
//   {
//     nome: 'CSS 2',
//     min: 25
//   }
// ];
//
// const tempoAulas = aulas.map(aula => aula.min);
//
// const nomeAulas = (aula) => aula.nome;
//
// const arrayNomeAulas = aulas.map(nomeAulas);
//
// console.log(arrayNomeAulas);
// console.log(tempoAulas);


const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index);
  return item;
}, 100);
