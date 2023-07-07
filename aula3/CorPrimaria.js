import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA VERIFICADOR COR PRIMÁRIA');

console.log('Informe a cor:');
let cor = pergunte();


let primaria = cor == 'amarelo' || cor == 'azul' || cor == 'vermelho';


console.log('É cor primária? ' + primaria);