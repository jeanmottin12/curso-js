// const menu = document.querySelector('.menu');
//
// menu.classList.add('ativo', 'teste');
// menu.classList.remove('teste');
// menu.classList.toggle('azul');
//
// if (menu.classList.contains('azul')) {
//   menu.classList.add('possui-azul');
// } else {
//   menu.classList.add('nao-possui-azul');
// }
//
// console.log(menu.className);
//
// const animais = document.querySelector('.animais');
// console.log(animais.attributes['data-texto']);
//
// const img = document.querySelector('img');
//
// const srcImg = img.getAttribute('alt');
// img.setAttribute('alt', 'é raposa');
// img.hasAttribute('alt', 'é raposa');
//
// console.log(srcImg);

// Adicione a classe ativo a todos os itens do menu
const activeClass = document.querySelectorAll('.menu a');

activeClass.forEach((item) => {
  item.classList.add('active');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
activeClass.forEach((item) => {
  item.classList.remove('active');
});
activeClass[0].classList.add('active');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((item) => {
  console.log(item, item.hasAttribute('alt'));
});

// Modifique o href do link externo no menu
const href = document.querySelector('a[href^="http"]');
href.setAttribute('href', 'https://www.google.com');
console.log(href);
