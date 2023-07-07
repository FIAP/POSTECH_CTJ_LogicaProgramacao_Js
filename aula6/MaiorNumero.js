import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA MAIOR NUMERO NA MATRIZ');

console.log('Informe a qtd de linhas:');
let linhas = Number(pergunte());

console.log('Informe a qtd de colunas:');
let colunas = Number(pergunte());



let numeros = [];

for (let linha = 0; linha < linhas; linha++) {
  numeros[linha] = [];
  
  for (let coluna = 0; coluna < colunas; coluna++) {
    console.log('Informe um valor:');
    numeros[linha][coluna] = Number(pergunte());
  }
}


let maior = 0;

for (let linha of numeros) {
  for (let coluna of linha) {
    if (coluna > maior) {
      maior = coluna;
    }
  }
}


console.log('A matriz informada foi:');
console.log(numeros);

console.log('O maior número é ' + maior);