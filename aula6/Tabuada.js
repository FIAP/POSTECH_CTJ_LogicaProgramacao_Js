import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA TABUADA');

console.log('Informe o número:');
let numero = Number(pergunte());



let tabuada = [];

for (let cont = 0; cont <= 10; cont++) {
  tabuada[cont] = numero * cont;
}



for (let cont = 0; cont < tabuada.length; cont++) {
  console.log(numero + ' x ' + cont + ' = ' + tabuada[cont]);
}
