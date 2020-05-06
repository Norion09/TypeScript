"use strict";
console.log('----------------------------------');
let funcionario;
funcionario = {
    nome: ['Alexander', 'Bassani', 'Amaral'],
    horarioChegada: [7, 8, 9]
};
console.log(funcionario.nome.length);
function baterPonto() {
    let i;
    for (i = 0; i < funcionario.nome.length; i++) {
        if (funcionario.horarioChegada[i] <= 8) {
            console.log(funcionario.nome[i], 'Horario normal');
        }
        else {
            console.log(funcionario.nome[i], 'Atrasado');
        }
    }
}
baterPonto();
//-------------------------------------------------------------------------
let funcionario2;
funcionario2 = {
    supervisores: ['Alexander', 'Bassani', 'Amaral'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Horario normal';
        }
        else {
            return 'Atrasado';
        }
    }
};
let funcionario3 = {
    supervisores: ['Alexander', 'Bassani', 'Amaral'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Horario normal';
        }
        else {
            return 'Atrasado';
        }
    }
};
