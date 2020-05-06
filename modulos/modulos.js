"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('----------------------------------');
// import { areaRetangulo } from './retangulo'  
const retangulo_1 = __importDefault(require("./retangulo")); // default no /retangulo
// import { areaCircunferencia } from './circuferencia'  
const circuferencia_1 = require("./circuferencia");
console.log('modulo carregado...');
console.log(retangulo_1.default(7, 8));
// console.log(areaCircunferencia(7))
console.log(circuferencia_1.areaCircunferencia(7));
const { digaOi } = require('./novo');
console.log(digaOi('ana'));
