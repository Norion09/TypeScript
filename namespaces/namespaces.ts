console.log('----------------------------------')
/*tsc -w -outFile namespace.ts*/
///<reference path="/namespaces/GeometriaCirc.js"/>
///<reference path="/namespaces/GeometriaRet.js"/>

// namespace Geometria {
//     export namespace Area{
//         const PI:number = 3.14

//         export function circuferencia(raio: number) {
//             return PI * Math.pow(raio, 2)
//         }
//         export function retangulo(base: number, altura: number) {
//             return base * altura
//         }

//     }
// }
console.log(Geometria.Area.circuferencia(10))
console.log(Geometria.Area.retangulo(10,20))