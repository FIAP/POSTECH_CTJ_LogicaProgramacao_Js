import { escrever, lerNumero } from './es.js';
import { calcularFatorial } from './funcoes.js';

escrever('PROGRAMA FATORIAL');
let numero = lerNumero('Informe um número:');

let fatorial = calcularFatorial(numero);

escrever('O fatorial é ' + fatorial);
