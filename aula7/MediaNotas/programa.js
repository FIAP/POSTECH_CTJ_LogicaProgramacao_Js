import { escrever, lerNumero } from './es.js';
import { media } from './funcoes.js';

escrever('PROGRAMA DA MEDIA DE NOTAS');
let qtd = lerNumero('Informe a qtd de notas:');

let notas = [];
for (let cont = 0; cont < qtd; cont++) {
  let v = lerNumero('Informe a nota:');
  notas[cont] = v;
}

let m = media(notas);
escrever('A média das notas é ' + m);