"use strict";
console.log('----------------------------------');
// string
let nome = 'joão';
console.log(nome);
//nome = 28
//numbers
let idade = 27;
//idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
//possuiHobbies = 1
console.log(possuiHobbies);
//tipos explícitos
let minhaIdade; //:any
minhaIdade = 27;
console.log(typeof minhaIdade);
//minha idade = '27'
//array
let hobbies = ['Cozinhar', 'Jogar', 'Estudar'];
console.log(hobbies[0]);
console.log(hobbies);
hobbies = [100, 200, 300];
//hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ['rua adolpho cassoli', 275, 'bloco A'];
console.log(endereco);
endereco = ['rua importante', 126, 'bloco 3'];
console.log(endereco);
//enums => valores pré definidos(dias da semana, gêneros de filmes, etc...)
var cor;
(function (cor) {
    cor[cor["cinza"] = 0] = "cinza";
    cor[cor["verde"] = 100] = "verde";
    cor[cor["azul"] = 10] = "azul";
    cor[cor["laranja"] = 11] = "laranja";
    cor[cor["amarelo"] = 12] = "amarelo";
    cor[cor["vermelho"] = 100] = "vermelho";
})(cor || (cor = {}));
let minhaCor = cor.verde;
console.log(minhaCor);
console.log(cor.cinza, cor.verde, cor.azul, cor.laranja, cor.amarelo, cor.vermelho);
//any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//funções
function retornaNome() {
    return nome;
    //return minhaIdade
}
console.log(retornaNome());
function digaOi() {
    console.log('oi');
    //return nome
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(4, 9));
//console.log(multiplicar(4,'bia'))
//tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 7));
//objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
//usuario{}
// usuario = {
//     name:'maria',
//     age:31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
// union types
let nota = 10;
nota = 10;
console.log(`minha nota é ${nota}`);
nota = '10';
console.log(`minha nota é ${nota}`);
//checando tipos
let valor = 30;
if (typeof valor === "number") {
    console.log('é um number');
}
else {
    console.log(typeof valor);
}
//never
function falha(msg) {
    throw new Error(msg);
    //while(true){}
}
const produto = {
    nome: 'sabão',
    preco: 2,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome!');
        }
        if (this.preco <= 0) {
            falha('preço invalido');
        }
    }
};
produto.validarProduto();
//valor null
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'fulano',
    tel1: '98765432112',
    tel2: null
};
console.log(contato1.nome, contato1.tel1, contato1.tel2);
