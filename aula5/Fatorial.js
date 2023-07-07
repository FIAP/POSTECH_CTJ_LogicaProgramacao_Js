import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA FATORIAL');

console.log('Informe um número:');
let numero = Number(pergunte());


let fatorial = 1;

for (let cont = 1; cont <= numero; cont++) {
  fatorial = fatorial * cont;
}


console.log('Fatorial é: ' + fatorial);