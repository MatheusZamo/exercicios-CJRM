/*

  01

  - No envio do form, faça com que a página não seja recarregada.

*/
const form = document.querySelector('form')

const handleSubmit = event => {
  event.preventDefault()
  
 // console.log(event.target.input.value)
  
  const regexInput = /^[a-zA-Z0-9]{7,11}$/
  let valueInput = form.input.value
  const resultRegex = regexInput.test(valueInput)
  const valueTrue = "O valor inserido no input é válido =)"
  const valueFalse = "Valor inválido =("
  
  resultRegex ? console.log(valueTrue) : console.log(valueFalse)
  
  valueInput = ''
  form.input.focus()
}

form.addEventListener('submit', handleSubmit)
/*

  02

  - No envio do form obtenha, através do objeto event, o texto inserido no  

    input e exiba-o no console.

*/

/*

  03

  - Teste uma regex que dá match com a palavra "documentation" do parágrafo do  

    index.html;

  - Exiba no console o boolean no qual este teste resulta.

*/
const doc = document.querySelector('a')
const regex = /documentation/
//console.log(regex.test(doc.innerText))
/*

  04

  - Escreva uma regex que dê match com a palavra "B99" da string abaixo;

  - A regex não deve conter (literalmente) os caracteres B99;

  - Teste se o match aconteceu e exiba o resultado no console.

*/

const B99message = 'E o Terry Crews faz tudo, inclusive tocar a abertura de B99 na flauta'

const regexB99 = /[A-Z0-9]{3}/

//console.log(regexB99.test(B99message))

/*

  05

  - Modifique (manualmente) o valor que a const word armazena para que o  

    resultado do teste entre a regex e a string exibido no console seja true.

*/

const word = 'O que a NASA fotografou no dia do seu aniversário?'

const NASARegex = /[A-Z]{4}/

const NASAResult = NASARegex.test(word)

//console.log(NASAResult)

/*

  06

  - No envio do form, se o valor inserido no input conter, no mínimo, 7  

    caracteres, que podem ser quaisquer caracteres, exiba no console a mensagem

    "O valor inserido no input é válido =)";

  - Caso contrário, exiba "Valor inválido =(" no console.

  

  Exemplos:

    - "a[b@X7c" é um valor válido, pois contém 7 caracteres;

    - "jozeti" não é um valor válido, pois contém 6 caracteres.

*/

/*

  07

  - Agora, no envio do form, faça com que o valor permitido contenha de 7 a 11 

    caracteres mas não contenha caracteres especiais. Apenas letras maiúsculas  

    ou minúsculas e números serão permitidos.

  Exemplos:

    - "0xY79aYx54e" é um valor válido, pois contém 11 letras e números;

    - "eich_1961" não é um valor válido, pois contém um caractere especial.

*/