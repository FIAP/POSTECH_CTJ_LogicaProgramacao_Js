import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA DA MÉDIA');


console.log('Informe a primeira nota:');
let nota1 = Number(pergunte());

console.log('Informe a segunda nota:');
let nota2 = Number(pergunte());

console.log('Informe a terceira nota:');
let nota3 = Number(pergunte());


let media = (nota1 + nota2 + nota3) / 3;


console.log('A média é ' + media);
