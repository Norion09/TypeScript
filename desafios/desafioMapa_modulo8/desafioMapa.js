"use strict";
console.log('----------------------------------');
class Mapa {
    constructor() {
        this.itens = new Array();
    }
    obter(chave) {
        const resultado = this.itens
            .filter(i => i.chave === chave);
        return resultado ? resultado[0] : null;
    }
    colocar(par) {
        const encontrado = this.obter(par.chave);
        encontrado ? encontrado.valor = par.valor : this.itens.push(par);
    }
    limpar() {
        this.itens = new Array();
    }
    imprimir() {
        console.log(this.itens);
        //console.log(this.itens.forEach(elemento => console.log(elemento)))
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
//mapa.imprimir()
mapa.limpar();
mapa.imprimir();
// class Item<T, R>{
//     constructor(protected chave: T, protected valor: R) {}
// }
