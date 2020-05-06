"use strict";
console.log('----------------------------------');
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ania',
    contaBancaria: contaBancaria,
    contatos: ['789456123', '789456123']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
