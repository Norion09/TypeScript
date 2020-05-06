// Exercicio 1
// var dobro = function(valor) {
//     return valor * 2
// }
// console.log(dobro(10))

const DobrarValor = (valor: number): number => valor += valor
console.log(DobrarValor(10))

//Exercicio 2
// var dizerOla = function (nome) {
//     if (nome === undefined) { nome = "Pessoa" }
//     console.log("Ola, " + nome)
// }
// dizerOla()
// dizerOla("Anna")

function dizerOla(nome: string): void {
    nome === undefined ? nome = 'Pessoa' : nome = nome
    console.log(`Olá ${nome}`)
}
dizerOla('Alex')
//dizerOla()

// Exercicio 3
// var nums = [-3, 33, 38, 5]
// console.log('???')

const nums: number[] = [-3, 33, 38, 5]
console.log(...nums)
console.log(Math.max(...nums))
console.log(Math.min(...nums))

// // Exercicio 4
// var array = [55, 20]
// console.log(array)

const array: number[] = [55, 20]
array.push(...nums)
//array = [...array, ...nums] //não pode ser usado pois array foi definido como uma constante
console.log(...array)

// // Exercicio 5
// var notas = [8.5, 6.3, 9.4]
// var notas1 = notas[0]
// var notas2 = notas[1]
// var notas3 = notas[2] 
// console.log(nota1, nota2, nota3)

const notas: number[] = [8.5, 6.3, 9.4]
const [nota1,nota2,nota3] = notas
console.log(`nota1 = ${nota1},nota2 = ${nota2},nota3 = ${nota3}`)


// // Exercicio 6
// var cientista = {primeiroNome: "Will", experiencia: 12}
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

const cientista: {
    primeiroNome: string,
    experiencia: number
} = {
    primeiroNome: "Will",
    experiencia: 12
}
console.log(`Primeiro Nome: ${cientista.primeiroNome}
Experiencia: ${cientista.experiencia} anos`)
