"use strict";
console.log('----------------------------------');
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        console.log('tooooot!!');
    }
    acelerar(valor) {
        return this.velocidade += valor;
    }
}
const moto1 = new Moto('honda 125');
console.log(moto1.buzinar);
console.log(moto1.acelerar(80));
console.log(moto1);
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
class Objeto2D {
    constructor() {
        this.altura = 0;
        this.base = 0;
    }
}
class Retangulo extends Objeto2D {
    area() {
        return this.altura * this.base;
    }
}
//const retangulo1 = new Retangulo(5,6)
const retangulo1 = new Retangulo;
console.log(retangulo1);
console.log(retangulo1.area());
// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
class estagiario {
    constructor(_primeiroNome) {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        (nome.length > 3) ? this._primeiroNome = nome : this._primeiroNome = '';
    }
}
const estagiario1 = new estagiario('Alex');
console.log(estagiario1.primeiroNome);
// estagiario1.primeiroNome('Le')
// console.log(estagiario1.primeiroNome())
estagiario1.primeiroNome = 'Leonardo';
console.log(estagiario1.primeiroNome);
