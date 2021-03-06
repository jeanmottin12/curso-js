// const animais = document.getElementById('animais');
// console.log(animais);
//
// const gridSection = document.getElementsByClassName('grid-section');
// console.log(gridSection);
//
// const primeiraLi = document.querySelector('li');
// console.log(primeiraLi);
//
// const primeiraUl = document.querySelector('ul');
// console.log(primeiraUl);
//
// const linksInternos = document.querySelector('[href^="#"]');
// console.log(linksInternos);
//
// const animaisImg = document.querySelectorAll('.animais img');
// console.log(animaisImg);
//
// const gridSectionHTML = document.getElementsByClassName('grid-section');
// const gridSectionNode = document.querySelectorAll('.grid-section');
//
// primeiraUl.classList.add('grid-section');
//
// console.log(gridSectionHTML);
// console.log(gridSectionNode);
//
// gridSectionNode.forEach(function(item, index){
//   console.log(item);
// });


// Retorne no console todas as imagens do site
const allImg = document.querySelectorAll('img')
console.log(allImg);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgImagem);

// Selecione todos os links internos (onde o href começa com #)
const links = document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
console.log(paragrafos[paragrafos.length - 1]);
