console.log('----------------------------------')
type Par<C, V> = {chave: C, valor: V}

class Mapa <C, V>{
    protected itens : Array<Par<C, V>> = new Array<Par<C,V>>()
    
    obter(chave: C): Par<C,V> | null{
        const resultado = this.itens
            .filter(i => i.chave === chave)
        return resultado ? resultado [0] : null
    }
    colocar(par: Par<C,V>) {
        const encontrado = this.obter(par.chave)
        encontrado ? encontrado.valor = par.valor : this.itens.push(par) 
    }
    limpar(){
        this.itens = new Array<Par<C, V>>()
    }
    imprimir(){
        console.log(this.itens)
        //console.log(this.itens.forEach(elemento => console.log(elemento)))
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({chave:1 ,valor: 'Pedro'})
mapa.colocar({chave:2 ,valor: 'Rebeca'})
mapa.colocar({chave:3 ,valor: 'Maria'})
mapa.colocar({chave:1 ,valor: 'Gustavo'})

console.log(mapa.obter(2))
mapa.imprimir()
//mapa.imprimir()
mapa.limpar()
mapa.imprimir()





// class Item<T, R>{
//     constructor(protected chave: T, protected valor: R) {}
// }
