import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA FEBRE');

console.log('Informe a temperatura:');
let temperatura = Number(pergunte());


let febre = temperatura >= 37;


console.log('Está com febre? ' + febre);

