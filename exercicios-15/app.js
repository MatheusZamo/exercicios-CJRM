/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/

let ul = document.querySelector('.videos')

const lis = Array.from(ul.children)

const insertClass = element => element.classList.add('video')

lis.forEach(insertClass)

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const h2 = document.querySelector('h2')
//console.log(h2.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const h1 = document.querySelector('h1')
//console.log(h1.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

//console.log(ul.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const showLis = event => console.log(event.target.innerText)

const addClickEvent = element => element.addEventListener('click',showLis)

lis.forEach(addClickEvent)

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const button = document.querySelector('button')

const insertNewVideo = ({name}) => ul.innerHTML += `<li>${name}</li>`

const buttonEvent = () => videos.forEach(insertNewVideo)

button.addEventListener('click',buttonEvent)

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/
  const body = document.querySelector('body')

  h1.addEventListener('click',() => body.remove())
