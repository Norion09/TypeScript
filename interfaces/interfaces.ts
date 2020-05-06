console.log('----------------------------------');
interface Humano {
    nome: string
    idade?: number // a ? faz com que o obejeto possa ou não ter essa caracteristica
    [prop: string]: any // aceita qualquer tipo de atributo
    saudar(sobrenome: string): void
}
function saudarComOla(pessoa: Humano) {
    console.log('Olá ' + pessoa.nome)
}
function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Joana'
}
const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobreNome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobreNome}`)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
// saudarComOla({nome:'Jonas',idade:27,altura: 1.80})
console.log(pessoa.saudar('Bassani'))

// Usando Classes
class Cliente implements Humano {
    nome: string = ''
    ultimaCompra: Date = new Date
    saudar(sobreNome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobreNome}`)
    }
}
const meuCliente = new Cliente()
meuCliente.nome = 'Han'
saudarComOla(meuCliente)
meuCliente.saudar('solo')
console.log(meuCliente.ultimaCompra)

//interface função
interface FuncaoCalculo {
    (a: number, b: number): number
}
let potencia: FuncaoCalculo
potencia = function (base: number, expoente: number): number {
    //math.pow(3,10)
    //3 ** 10
    console.log(Array(expoente).fill(base))
    return (Array(expoente).fill(base)).reduce((a, b) => a * b)
}
console.log(potencia(3, 3))
console.log(potencia(5, 3))
console.log(potencia(3, 7))

//-------------------------
interface A {
    a(): void
}
interface B {
    b(): void
}
interface ABC extends A, B {
    c(): void
}
class RealA implements A {
    a(): void { }
}
class RealAB implements A, B {
    a(): void { }
    b(): void { }
}
class RealABC implements ABC {
    a(): void { }
    b(): void { }
    c(): void { }
}
abstract class AbstrataABD implements A, B {
    a(): void { }
    b(): void { }
    abstract d(): void
}

interface Object {
    log(): void
}
Object.prototype.log = function () {
    console.log(this.toString())
}
const x = 2
const y = 3
const z = 4

x.log()
y.log()
z.log()