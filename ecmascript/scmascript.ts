console.log('----------------------------------')
// let e const
//var seraQuePode = '?'
// console.log(seraQuePode)
// var seraQuePode = '?' // hoisting

let estaFrio = true
if (estaFrio) {
    let acao = 'coloca casaco'
    console.log(acao)
}

const cpf: string = '123.456.789-56'
//cpf ='987.654.321-65'
console.log(cpf);

var segredo = 'externo!'
function revelar() {
    let segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
    //console.log(def)
}
//console.log(def)

for (let i = 0; i < 10; i++) {
    console.log(i)
}
//console.log(i)

//arrow functiton

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(3, 7))

const saudacao = () => console.log('olá pessoa')
saudacao();

const falarCom = (pessoa: string) => console.log('olá ' + pessoa)
falarCom('Alex')

//this

// function normalComThis() {
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//     .bind({nome:'Ana'})
// normalComThisEspecial()

//this ????
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//     .bind({nome:'Ana'})
// console.log(arrowComThisEspecial())

//parâmetros padrão
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
    console.log(inicio)
    while (inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log('Fim!')
}
contagemRegressiva()
contagemRegressiva(3)

//Rest & Spread

const numbers = [1, 5, 10, 99, 562, 853, 1024]
//console.log(Math.max(number))
//console.log(Math.max(numbers[0],numbers[1],numbers[2],numbers[3]))
console.log(Math.max(...numbers)) //spread

const turmaA: string[] = ['a', 'b', 'c', 'd']
const turmaB: string[] = [...turmaA, 'e', 'f', 'g']
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
    return args
}
const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest& Spread (tupla)
const tupla: [number, string, boolean] = [1, ' a ', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a}${b}${c}`)
}
tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]): void {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]}${params[1]}${params[2]}`)
}
tuplaParam2(...tupla)

//Destructing (Array)
const caracteristicas = ['Motor zetec 1.8', 2020]
//const motor = caracteristicas[0]
//const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor, ano)

//Destructing (Objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristica: {
        w: 'importado'
    }
}
const nomeItem = item.nome
const precoItem = item.preco
const caractetisticaItem = item.caracteristica.w
console.log(nomeItem, precoItem, caractetisticaItem)
const { nome: n, preco: p, caracteristica: { w } } = item
console.log(n, p, w)

const usuarioID: string = 'SupporterCod3r'
const notificações: string = '11'
//const boasVindas = 'Boas Vindas ' + usuarioID + ', notificações: ' + notificações
const boasVindas = 
`    Boas Vindas ${usuarioID}, 
    notificações: ${parseInt(notificações) > 9 ? '+9' : notificações}
`
console.log(boasVindas)

//callback ESC6+ assincrono
// function esperar3s(callback: (dado:string) => void) {
//     setTimeout(() => {
//         callback('3s depois....')
//     }, 3000);
// }

// esperar3s(function (resultado) {
//     console.log(resultado)    
// })

// function esperar3sPromise(){
//     return new Promise((resolve:any) => {
//         setTimeout(() => {
//             resolve('3s depois promise....')
//         }, 3000);
//     })
// }

// esperar3sPromise()
//     .then(dado => console.log(dado))

// fetch('https://swapi.co/api/people/1')
//     .then(res => res.json())
//     .then(personagem => personagem.films)
//     .then(films => fetch(films[0]))
//     .then(resFilm => resFilm.json())
//     .then(filme => console.log(filme, filme.title))
//     .catch(err =>console.log('catch' + err))