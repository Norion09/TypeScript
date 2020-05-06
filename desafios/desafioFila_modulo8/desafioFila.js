"use strict";
console.log('----------------------------------');
class filas {
    constructor(...args) {
        this.fila = args;
    }
    entrar(Item) {
        this.fila.push(Item);
        // this.fila.forEach(element => this.fila.push(element));
    }
    proximo() {
        if (this.fila.length <= 0 && this.fila[0]) {
            const primeiro = this.fila[0];
            this.fila.splice(0, 1);
            return primeiro;
        }
        else {
            return null;
        }
    }
    imprimirFila() {
        console.log(this.fila);
    }
}
const fila1 = new filas(1, 2, 3);
fila1.entrar(5);
fila1.imprimirFila();
fila1.proximo();
fila1.imprimirFila();
// console.log(new operacaoBinaria('bom ','dia').executar())
// console.log(new operacaoBinaria(5,7).executar())
// console.log(new operacaoBinaria(8,' opa').executar())
// console.log(new operacaoBinaria({}{}).executar())
