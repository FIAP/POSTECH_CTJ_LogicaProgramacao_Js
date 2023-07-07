import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA INVERTER TEXTO');

console.log('Informe uma palavra:');
let palavra = pergunte();


let invertida = '';

for (let pos = 0; pos < palavra.length; pos++) {
  let letra = palavra.charAt(pos);
  invertida = letra + invertida;
}


console.log('Palavra invertida: ' + invertida);