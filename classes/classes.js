"use strict";
console.log('----------------------------------');
class Data {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario = new Data(3, 11, 1991);
console.log(aniversario);
const casamento = new Data();
casamento.ano = 1989;
casamento.dia = 1;
casamento.mes = 10;
console.log(casamento);
//----------------------------------------
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversarioEsperto = new Data(3, 11, 1991);
console.log(aniversario);
const casamentoEsperto = new Data();
casamentoEsperto.ano = 1989;
casamentoEsperto.dia = 1;
casamentoEsperto.mes = 10;
console.log(casamentoEsperto);
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    resumo() {
        return `${this.nome} custa: R$${this.precoComDesconto()} (${this.desconto * 100}% OFF)`;
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
const produto1 = new Produto('escova', 10);
const produto2 = new Produto('pasta', 5, 0.2);
const produto3 = new Produto('shampoo', 15, 0.35);
console.log(produto1.resumo());
console.log(produto2.resumo());
console.log(produto3.resumo());
//-----------------------------------------------
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
Array(50).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(15).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
//simular "erros"
// carro1.velocidadeAtual = 300
// console.log('atual -> ' +carro1.velocidadeAtual)
// carro1.velocidadeMaxima = 500
// console.log('Máxima -> ' +carro1.velocidadeMaxima)
// carro1.alterarVelocidade(150)
// console.log('atual -> ' +carro1.velocidadeAtual)
//------------------------------------------------------
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('Ferrari', modelo, velocidadeMaxima);
        this.modelo = modelo;
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
// console.log(f40.acelerar())
// console.log(f40.acelerar())
// console.log(f40.frear())
console.log(f40.frear());
//-------------------------------------------------------
// Getter & Setter
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        (valor >= 0 && valor <= 120) ? this._idade = valor : this._idade = this._idade;
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10;
console.log(pessoa1);
console.log(pessoa1.idade);
//Atributos e métodos estáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * (raio * raio);
    }
}
Matematica.PI = 3.1416;
// const m1 = new Matematica()
// console.log(m1.areaCirc(5))
console.log(Matematica.areaCirc(5));
// Classe Abstrata
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    getResultado() {
        return this.resultado;
    }
}
class soma2 extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t + a);
    }
}
class multiplicacao extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((t, a) => t * a);
    }
}
let c1 = new soma2();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
let c2 = new multiplicacao();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
//-----------------------------------------
class Unico {
    constructor() {
    }
    static getinstance() {
        return Unico.instance;
    }
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
//const errado = new Unico()
console.log(Unico.getinstance().agora());
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'pt-ABC');
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice);
