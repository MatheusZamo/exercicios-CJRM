/*
  01

  - Implemente uma função que recebe o nome da key de um item da localStorage 
    e retorna o valor da key parseado para objeto javascript.
*/
const familyName = [
  {myName:'Matheus'},
  {sonName:'Estevão'},
  {wifeName:'Ana'}
]

const creatingNewItem = localStorage.setItem('familyName',JSON.stringify(familyName))

const getObjectFromLocalStorage = key => {
  const getValueItem = localStorage.getItem(key)
  return console.log(JSON.parse(getValueItem))
}

//getObjectFromLocalStorage('familyName')

/*
  02

  - Mesmo com um input type="number", a expressão `event.target.value` abaixo 
    resulta em uma string;
  - Exiba, no console, o valor que foi inserido no input;
  - O exibido valor deve ser do tipo number;
  - Não utilize a invocação da Number() ou qualquer outro método que converta 
    strings em number.

  Dica: pesquise por valueAsNumber.
*/

const input = document.querySelector('[data-js="input"]')

input.addEventListener('input', event => {
  console.log(event.target.valueAsNumber)
})

/*
  03

  - Implemente uma função 'combineOperations' que recebe 2 parâmetros:
    - Um valor inicial, do tipo number;
    - Um array de funções.
  - A combineOperations deve: 
    - Passar o valor inicial para a 1ª função do array;
    - Passar o valor retornado pela invocação da 1ª função para a 2ª função, e 
      assim por diante. Até que cada função do array tenha sido invocada;
    - Retornar o valor que a invocação da última função do array retornou.
  - Descomente o código abaixo. A primeira invocação da combineOperations deve 
    retornar 60 e a segunda invocação, 10.
*/

const add100 = num => num + 100

const divByFive = num =>  num / 5

const multiplyByThree = num =>  num * 3

const multiplyFive = num =>  num * 5

const addTen = num => num + 10

const combineOperations = (initValue, arrOfFuncs) => 
  arrOfFuncs.reduce((acc, func) => func(acc),initValue)

//console.log(combineOperations(0, [add100, divByFive, multiplyByThree]))
//console.log(combineOperations(0, [divByFive, multiplyFive, addTen]))

/*
  04

  - O código abaixo não está funcionando. Descubra o que ele está tentando 
    fazer e refatore-o.
*/

const albums = [
  {
    id: 537,
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    price: 59.90,
    genre: 'Progressive Rock'
  },
  {
    id: 975,
    title: 'Houses of the Holy',
    artist: 'Led Zeppelin',
    price: 81.00,
    genre: 'Rock'
  },
  {
    id: 359,
    title: 'Heaven and Hell',
    artist: 'Black Sabbath',
    price: 49.90,
    genre: 'Heavy metal'
  }
]

const searchAlbum = {
  id: 975,
  title: 'Houses of the Holy',
  artist: 'Led Zeppelin',
  price: 81.00,
  genre: 'Rock'
}

const searchAlbumExistsInArray = albums.some(album => album.id === searchAlbum.id)

if (searchAlbumExistsInArray) {
  console.log(`${JSON.stringify(searchAlbum)} existe no array albums.`)
}


/*
  05

  - Baseado no que foi mostrado na aula passada, faça uma cópia do `obj`.
*/

const obj = {
  prop1: 'a',
  prop2: 'b',
  prop3: null,
  prop4: true,
  prop5: false,
  prop6: [9, { x: 1, y: 2 }],
  prop7: 7,
  prop8: { a: 'x', b: 'y' },
}

const objCopy = {
  ...obj,
  prop0: () => {},
  prop6: [
    obj.prop6[0],
    {...obj.prop6[1]}
  ],
  prop8:{
    ...obj.prop8
  }
}
/*
  06

  - Implemente uma função que cria e retorna um elemento HTML;
  - Ela deve receber o nome do elemento HTML a ser criado e um objeto com os 
    atributos que o elemento deve conter;
  - A quantidade de atributos que o elemento irá conter pode variar.

  Dica: pesquise por Object.entries.
*/
const createElement = (elementName, attributes) => {
  const element = document.createElement(elementName)
  const attributesAsArray = Object.entries(attributes)

  attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value))

  return element
}

const h1 = createElement('h1',{
  type: 'text',
  id: 'title',
  name: 'main',
  'data-js': 'title'
})

//console.log(h1)
/*
  07

  - Na weather app, faça com que quando o usuário recarregar a página ou sair 
    da aplicação e voltar, as informações da última cidade pesquisada sejam 
    exibidas na interface.
*/