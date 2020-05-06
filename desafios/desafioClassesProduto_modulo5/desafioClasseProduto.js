"use strict";
console.log('----------------------------------');
class ProdutoDesafio {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
const ProdutoDesafio1 = new ProdutoDesafio('escova', 10);
const ProdutoDesafio2 = new ProdutoDesafio('pasta', 5, 0.2);
console.log(produto1);
console.log(produto2);
