/*
  01

  - Declare uma constante que recebe o seu nome;
  - Ela deve ter um escopo global.
*/
const name = 'Matheus'
/*
  02

  - Funções também são blocos de código;
  - Crie uma função que ao ser invocada, exibe sua idade no console;
  - Dentro da função, declare uma let que armazena a sua idade;
  - Exiba sua idade no console, através da invocação da função;
  - Do lado de fora da função exiba no console o valor da let que foi declarada  
    dentro da função;
  - Um erro com a mensagem "Uncaught ReferenceError: SUA_VARIÁVEL is not  
    defined" será exibido no console;
  - Você sabe por que isso aconteceu?
*/
const myAge = () =>{
  let age = 28
  console.log(age)
}
//myAge()
//console.log(age) //O erro acontece pois age e uma variavel local, ela existe apenas dentro da função 
/*
  03

  - Crie um objeto "car" com as seguintes propriedades e métodos:
    - name, que recebe o nome do carro;
    - brand, que recebe a marca do carro;
    - colors, que recebe 3 cores para o carro;
    - isRunning, que recebe um boolean indicando se o carro está em movimento.  
      Inicialmente, deve receber um boolean indicando que o carro não está em  
      movimento;
    - run, que é um método que faz o carro andar e retorna a mensagem  
      "O NOME_DO_CARRO está em movimento";
    - stop, que é um método que faz o carro parar e retorna a mensagem  
      "O NOME_DO_CARRO está parado";
    - getColorsMessage, que é um método que retorna a mensagem  
      "O NOME_DO_CARRO está disponível nas cores COR_01, COR_02 e COR_03".
*/
const car = {
  name: 'Lamborghini Aventador',
  brand: 'Lamborghini',
  colors: ['green','black','orange'],
  isRunning: false,
  run (){
    this.isRunning = true
     return `A ${this.name} está em movimento`
  },
  stop (){
    this.isRunning = false
    return `A ${this.name} está parado`
  },
  getColorsMessage (){
    const lastItem = this.colors[this.colors.length - 1]
    const colors = this.colors.join(', ').replace(lastItem , `e ${lastItem}`)
    return `A ${this.name} está disponível nas cores ${colors}`
  }

  
}
/*
  04

  - Faça o carro andar e exiba no console se ele realmente está em movimento.
*/
//console.log(car.run())
//console.log(car.isRunning)
/*
  05

  - Faça o carro parar e exiba no console se ele realmente está parado.
*/
//console.log(car.stop())
//console.log(car.isRunning)
/*
  06

  - Exiba, no console, a mensagem com as cores do carro.
*/
//console.log(car.getColorsMessage())
/*
  07

  - Exiba, no console, a mensagem "O carro é um MARCA_DO_CARRO NOME_DO_CARRO";
  - Utilize a notação de colchetes para acessar as propriedades do carro.
*/
//console.log(`O carro é uma ${car['brand']}, ${car['name']}`)