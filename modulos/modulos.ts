console.log('----------------------------------')
// import { areaRetangulo } from './retangulo'  
import areaRetangulo from './retangulo'  // default no /retangulo
// import { areaCircunferencia } from './circuferencia'  
import { areaCircunferencia as circ } from './circuferencia'

console.log('modulo carregado...')
console.log(areaRetangulo(7, 8))
// console.log(areaCircunferencia(7))
console.log(circ(7))

const { digaOi } = require('./novo')
console.log(digaOi('ana'))