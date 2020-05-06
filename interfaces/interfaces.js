"use strict";
console.log('----------------------------------');
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobreNome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobreNome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
// saudarComOla({nome:'Jonas',idade:27,altura: 1.80})
console.log(pessoa.saudar('Bassani'));
// Usando Classes
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date;
    }
    saudar(sobreNome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobreNome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('solo');
console.log(meuCliente.ultimaCompra);
let potencia;
potencia = function (base, expoente) {
    //math.pow(3,10)
    //3 ** 10
    console.log(Array(expoente).fill(base));
    return (Array(expoente).fill(base)).reduce((a, b) => a * b);
};
console.log(potencia(3, 3));
console.log(potencia(5, 3));
console.log(potencia(3, 7));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
x.log();
y.log();
z.log();
