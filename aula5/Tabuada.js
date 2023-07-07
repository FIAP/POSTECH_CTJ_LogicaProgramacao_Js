import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA TABUADA');

console.log('Informe um número:');
let numero = Number(pergunte());



for (let cont = 0; cont <= 10; cont++) {
  let valor = numero * cont;
  console.log(numero + ' x ' + cont + ' = ' + valor);
}

