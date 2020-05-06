console.log('----------------------------------')
// com "noEmitOnError": false para testes
let canal: string = 'gaveta'
let inscritos: number = 610234

//canal = inscritos
console.log(`canal = ${canal}`)

//let nome = 'pedro'
nome = 'pedro'

//-----------------------------------------------
// com "noImplicitAny": false para testes
function soma(a: any, b: any) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

//-----------------------------------------------
// com "strictNullChecks": false para testes

function saudar(isManha: boolean, /*horas: number*/): string {
    //let a = 1
    let saudacao: string
    if (isManha) {
        saudacao = 'bom dia'
    }else{
        saudacao = 'boa tarde' // comentar o else
    }
    return saudacao;
}