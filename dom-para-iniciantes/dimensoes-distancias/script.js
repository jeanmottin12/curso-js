// const listaAnimais = document.querySelector('.animais-lista');
//
// const height = listaAnimais.scrollHeight;
// const animaisTop = listaAnimais.offsetTop;
// console.log(animaisTop);
//
// const primeiroh2 = document.querySelector('h2');
//
// const rect = primeiroh2.getBoundingClientRect();
// console.log(rect);
//
// console.log(
//   window.innerWidth,
//   window.outerWidth,
//   window.outerHeight,
//   window.innerHeight,
//   window.pageYOffset
// );
//
// const small = window.matchMedia('(max-width: 600px)').matches;
// console.log(small);
//
// if(small) {
//   console.log('usuario mobile');
// } else {
//   console.log('usuario desktop');
// }

// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImg = document.querySelector('img');
console.log(primeiraImg.offsetTop);

// Retorne a soma da largura de todas as imagens
function somaImgs() {
  const todasImgs = document.querySelectorAll('img');
  let soma = 0;
  todasImgs.forEach((item) => {
    soma = soma + item.offsetWidth;
  });
  console.log('soma é: ' + soma);
}
window.onload = function() {
  somaImgs();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((item) => {
  const width = item.offsetWidth;
  const height = item.offsetHeight;
  if (width >= 48 && height >= 48) {
    console.log(item, 'Possui acessibilidade')
  } else {
    console.log(item, 'Não possui acessibilidade')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menuMobile = document.querySelector('.menu');

const mobile = window.matchMedia('(max-width: 720px)').matches;
if(mobile){
  menuMobile.classList.add('active');
}
