// window.alert('isso');


const h1Selecionado = document.querySelector('h1');

function callback(){
  console.log('clicou em', h1Selecionado.innerText);
};

h1Selecionado.addEventListener('click', callback);

// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log('URL da página: ' + href);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const select = document.querySelector('.active');
console.log(select);

// Retorne a linguagem do navegador
const language = navigator.language;
console.log(language);
// Retorne a largura da janela
const windowWidth = window.outerWidth;
console.log(windowWidth);
