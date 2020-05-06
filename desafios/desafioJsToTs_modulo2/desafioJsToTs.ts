console.log('----------------------------------')
type ContaBancaria = {
    saldo: number,
    depositar:(valor: number) => void
}
let contaBancaria: ContaBancaria = {
    saldo:3456,
    depositar(valor: number){
        this.saldo += valor
    }
}
type correntista = {
    nome:string,
    contaBancaria: ContaBancaria,
    contatos: [string, string]
}
let correntista :correntista = {
    nome:'Ania',
    contaBancaria: contaBancaria,
    contatos: ['789456123','789456123']
}

correntista.contaBancaria.depositar(3000);
console.log(correntista);