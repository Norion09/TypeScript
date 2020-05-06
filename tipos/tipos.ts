console.log('----------------------------------')
// string
let nome: string = 'joão'
console.log(nome)
//nome = 28

//numbers
let idade: number = 27
//idade = 'Ana'
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
//possuiHobbies = 1
console.log(possuiHobbies)

//tipos explícitos
let minhaIdade: number//:any
minhaIdade = 27
console.log(typeof minhaIdade)
//minha idade = '27'

//array

let hobbies: any[] = ['Cozinhar', 'Jogar', 'Estudar']
console.log(hobbies[0])
console.log(hobbies)
hobbies = [100, 200, 300]
//hobbies = 100
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ['rua adolpho cassoli', 275, 'bloco A']
console.log(endereco)
endereco = ['rua importante', 126, 'bloco 3']
console.log(endereco)

//enums => valores pré definidos(dias da semana, gêneros de filmes, etc...)
enum cor {
    cinza, //0
    verde = 100, //100
    azul = 10, //10
    laranja, //11
    amarelo, //12
    vermelho = 100, //100
}
let minhaCor: cor = cor.verde
console.log(minhaCor);
console.log(cor.cinza, cor.verde, cor.azul, cor.laranja, cor.amarelo, cor.vermelho)

//any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

//funções
function retornaNome(): string {
    return nome
    //return minhaIdade
}
console.log(retornaNome())

function digaOi(): void {
    console.log('oi')
    //return nome
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(4, 9))
//console.log(multiplicar(4,'bia'))

//tipo função
let calculo: (numA: number, numB: number) => number
// calculo = digaOi
// calculo()
calculo = multiplicar
console.log(calculo(5, 7))

//objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}
console.log(usuario)
//usuario{}
// usuario = {
//     name:'maria',
//     age:31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
}
console.log(usuario)

// union types
let nota: number | string = 10
nota = 10
console.log(`minha nota é ${nota}`)
nota = '10'
console.log(`minha nota é ${nota}`)

//checando tipos
let valor = 30

if (typeof valor === "number") {
    console.log('é um number')
} else {
    console.log(typeof valor)
}

//never
function falha(msg: string): never {
    throw new Error(msg)
    //while(true){}
}

const produto = {
    nome: 'sabão', //''
    preco: 2, //-1
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome!')
        }
        if (this.preco <= 0) {
            falha('preço invalido')
        }
    }

}

produto.validarProduto()

//valor null

let altura = 12
//altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}
const contato1: Contato = {
    nome: 'fulano',
    tel1: '98765432112',
    tel2: null
}
console.log(contato1.nome, contato1.tel1, contato1.tel2)