// // tipo number
// console.log(typeof 2)
// console.log(typeof 2.2)
// console.log(typeof -2)

// // operações aritiméticas
// console.log(2 + 2)
// console.log(3 - 2)
// console.log(3 * 2)
// console.log(4 / 2)
// console.log(4 ** 2)
// console.log(4 % 2)

// tipo string
// console.log("hello world")
// console.log('hello world')
// console.log(`hello world`)
// console.log(typeof `hello world`)

// concatenação de strings
// console.log('Qual ' + 'o seu ' + 'nome')

//interpolação de strings ${ } -> template string
// console.log(`A soma de 5 + 5 é: ${5+5}`)

// tipo boolean
// console.log(typeof true)
// console.log(typeof false)

// console.log(5 < 5)
// console.log(5 == 5)
// console.log(5 === '5')
// console.log(10 != 9)
// console.log(10 !== '10')
// console.log(10 > 2 && 2 > 10) // AND
// console.log(10 > 2 || 2 > 10) // OR
// console.log(!true) // NOT
// console.log(!false) //

// declaração de variáveis 
var a = 2
let b = 3
const c = 4

if(true) {
    // c = 2 // NÃO PODE POIS É CONSTANTE
    // console.log(a)
    // console.log(b)
    // console.log(c)

    var d = 5
    let e = 7
    const f = 9
}

// console.log(d)
// console.log(e) // NÃO PODE SER ACESSADA DE FORA DO BLOCO
// console.log(f) //

// declaração múltipla:
let g = 0, h = 0, i = 0

// estruturas
const user = 'rodrigo'
if(user === 'rodrigo') {
    // console.log('Olá Rodrigo..!')
}

const logado = true
if(logado) {
    // console.log('Usuário autenticado..!')
} else {
    // console.log('Usuário não autenticado...!')
}

// operador ternário -> equivale ao if-else
// logado ? console.log('Usuário autenticado..!') : console.log('Usuário não autenticado...!')

const curso = 'EE'

switch(curso){
    case 'SW':
        console.log('Engenharia de Software');
        break
    case 'ENC':
        console.log('Engenharia de Computação');
        break
    case 'EE':
        // console.log('Engenharia de Elétrica');
        break
    default:
        console.log('Nenhumas das alternativas')
}

// laços de repetição
let j = 0
while(j < 10) {
    // console.log(j)
    j++
}

k = 0
do {
    // console.log(k)
    k++
} while(k < 10)


for(let i = 0; i < 10; i++) {
    // console.log(i)
}

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        break
    }
    // console.log(i)
}

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        continue
    }
    // console.log(i)
}


// função sem passagem de parâmetro e sem retorno
function myFunction() {
    // console.log('Hello world')
}
 const myFunction2 = () => { // arrow function
    // console.log('Hello world 2')
 }

myFunction()
myFunction2()

// função com passagem de parâmetro e sem retorno
function defineParOuImpar(numero) {
    if(numero % 2 === 0) {
        console.log(`${numero} é par!`)
    } else {
        console.log(`${numero} é ímpar!`)
    }
}
// defineParOuImpar(2)

function defineParOuImpar2(numero) {
    numero % 2 === 0 ? console.log(`${numero} é par!`) : console.log(`${numero} é ímpar!`)
}
// defineParOuImpar2(11)

const defineParOuImpar3 = (numero) => {
    numero % 2 === 0 ? console.log(`${numero} é par!`) : console.log(`${numero} é ímpar!`)
}
// defineParOuImpar3(12)

// função com passagem de parâmetro e com retorno
function calculaRaiz(numero) {
    return Math.sqrt(numero)
}

const resultado = calculaRaiz(81)
// console.log(resultado)
// console.log(calculaRaiz(64))

const calculaRaiz2 = (numero) => {
    return Math.sqrt(numero)
}

// console.log(calculaRaiz2(4))

// arrays
let nomes = ['joão', 'ana', 'pedro']
// console.log(typeof nomes)
// acesso via índice
// console.log(nomes[0])
nomes[0] = 'rodrigo'
// console.log(nomes)

// algumas propriedades
// console.log(nomes.length)
// console.log(Object.keys(nomes)) // mostra os índices

// alguns métodos
// nomes.push('maria') // insere no final
// nomes.unshift('daniel') // insere no inicio
nomes.pop() // remove do final
nomes.shift('rodrigo') // remove do início
// console.log(nomes)

const numbers = [2, 10, 50, 100]
const filteredNumbers = numbers.filter((number) => number > 10) // retorna um array com o resultado do teste
// console.log(filteredNumbers)

const foundNumber = numbers.find((number) => number > 10) // retorna o primeiro elemento que encontrar de acordo com o teste
// console.log(foundNumber)

const foundIndex = numbers.findIndex((number) => number > 10) // retorna o índice do primeiro elemento que encontrar de acordo com o teste
// console.log(foundIndex)

// const slicedNumbers = numbers.slice(0, 3)
const slicedNumbers = numbers.slice(2) // do índice dois a diante
// console.log(slicedNumbers)

// const reversedNumber = numbers.reverse()
// console.log(reversedNumber)

// percorrendo arrays
for(let i = 0; i < numbers.length; i++) {
    // console.log(numbers[i])
}

// numbers.forEach(number => console.log(number))
// numbers.map(number => console.log(number))
const newNumbers = numbers.map((number) => number * 2)
console.log(newNumbers)