import { escrever, lerNumero } from './es.js';
import { verificarFebre } from './funcoes.js';

escrever('PROGRAMA VERIFICADOR DA FEBRE');
let temperatura = lerNumero('Informe a temperatura:');

let situacao = verificarFebre(temperatura);

escrever(situacao);
