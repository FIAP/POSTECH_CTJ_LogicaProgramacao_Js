import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA CALCULADORA');

console.log('Informe um número:');
let numero1 = Number(pergunte());

console.log('Informe outro número:');
let numero2 = Number(pergunte());

console.log('Informe a operação (+ - * /):');
let operacao = pergunte();



let resposta = 0;

switch (operacao) {
  case '+':
    resposta = numero1 + numero2;
    break;
  
  case '-':
    resposta = numero1 - numero2;
    break;
  
  case '*':
    resposta = numero1 * numero2;
    break;
  
  case '/':
    resposta = numero1 / numero2;
    break;
}


console.log('A resposta é ' + resposta);

