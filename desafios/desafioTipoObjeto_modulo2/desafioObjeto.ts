console.log('----------------------------------')
let funcionario: { nome: string[], horarioChegada: number[] }

funcionario = {
    nome: ['Alexander', 'Bassani', 'Amaral'],
    horarioChegada: [7, 8, 9]
}
console.log(funcionario.nome.length)
function baterPonto(): void {
    let i: number
    for (i = 0; i < funcionario.nome.length; i++) {
        if (funcionario.horarioChegada[i] <= 8) {
            console.log(funcionario.nome[i], 'Horario normal')
        } else {
            console.log(funcionario.nome[i], 'Atrasado')
        }

    }
}
baterPonto()


//-------------------------------------------------------------------------


let funcionario2: {
    supervisores: string[],
    baterPonto: (horas: number) => string
}
funcionario2 = {
    supervisores: ['Alexander', 'Bassani', 'Amaral'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Horario normal'
        } else {
            return 'Atrasado'
        }
    }
}

//--------------------------------------------------------------
// Alias - para reatilizar 
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}
let funcionario3: Funcionario = {
    supervisores: ['Alexander', 'Bassani', 'Amaral'],
    baterPonto(horario: number): string {
        if (horario <= 8) {
            return 'Horario normal'
        } else {
            return 'Atrasado'
        }
    }
}