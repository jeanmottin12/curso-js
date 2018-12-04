// const h1 = document.querySelector('h1');
// const animaisLista = document.querySelector('.animais-descricao');
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);
//
// // h1.outerHTML = '<p>Novo titulo</p>';
//
// // console.log(animaisLista.innerHTML);
//
// const lista = document.querySelector('.animais-lista');
//
// console.log(lista.parentElement);
// console.log(lista.nextElementSibling);
// console.log(lista.previousElementSibling);
// console.log(lista.children);
// console.log(lista.querySelector('li:last-child'));
//
// const animais = document.querySelector('.animais');
// const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');
//
// const mapa = document.querySelector('.mapa');
//
// contato.replaceChild(mapa, titulo);
//
// // contato.insertBefore(animais, mapa);
//
// const novoh1 = document.createElement('h1');
// novoh1.innerText = 'novo titulo';
// novoh1.classList.add('titulo');
// mapa.appendChild(novoh1);
//
// console.log(novoh1);

// const h1 = document.querySelector('h1');
// const faq = document.querySelector('.faq');
//
// const cloneH1 = h1.cloneNode(true);
//
// cloneH1.classList.add('azul');
// faq.appendChild(cloneH1);

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq');
const primeiroDT = faq.querySelector('dt');
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
console.log(primeiroDT.nextElementSibling);

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
faq.innerHTML = animais.innerHTML;
