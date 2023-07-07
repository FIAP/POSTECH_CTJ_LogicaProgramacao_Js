import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA VALIDADOR NOTA');

console.log('Informe a nota:');
let nota = Number(pergunte());


let valida = nota >= 0 && nota <= 10;


console.log('Nota válida? ' + valida);
