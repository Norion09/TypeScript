"use strict";
console.log('----------------------------------');
// com "noEmitOnError": false para testes
let canal = 'gaveta';
let inscritos = 610234;
//canal = inscritos
console.log(`canal = ${canal}`);
//let nome = 'pedro'
nome = 'pedro';
//-----------------------------------------------
// com "noImplicitAny": false para testes
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//-----------------------------------------------
// com "strictNullChecks": false para testes
function saudar(isManha) {
    //let a = 1
    let saudacao;
    if (isManha) {
        saudacao = 'bom dia';
    }
    else {
        saudacao = 'boa tarde'; // comentar o else
    }
    return saudacao;
}
