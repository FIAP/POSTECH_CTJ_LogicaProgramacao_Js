import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA DOBRO');


console.log('Informe um número:');
let numero = Number(pergunte());


let dobro = numero * 2;


console.log('O dobro é ' + dobro);
