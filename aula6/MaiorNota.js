import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA MAIOR NOTA');

console.log('Informe a qtd de notas:');
let qtd = Number(pergunte());



let notas = [];

for (let cont = 0; cont < qtd; cont++) {
  console.log('Informe a nota:');
  notas[cont] = Number(pergunte());
}



let maior = 0;

for (let item of notas) {
  if (item > maior) {
    maior = item;
  }
}


console.log('As notas informadas foram:');
console.log(notas);
console.log('A maior nota é ' + maior);