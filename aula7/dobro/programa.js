import { escrever, lerNumero } from './es.js';
import { calcularDobro } from './funcoes.js';

escrever('PROGRAMA DOBRO');
let numero = lerNumero('Informe um número:');

let dobro = calcularDobro(numero);

escrever('O dobro é ' + dobro);
