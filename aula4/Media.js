import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA MEDIA');

console.log('Informe a primeira nota:');
let nota1 = Number(pergunte());

console.log('Informe a segunda nota:');
let nota2 = Number(pergunte());

console.log('Informe a terceira nota:');
let nota3 = Number(pergunte());


let media = (nota1 + nota2 + nota3) / 3;
let situacao = '';

if (media >= 6) {
  situacao = 'Passou';
}
else if (media >= 4) {
  situacao = 'DP';
}
else {
  situacao = 'Reprovou';
}


console.log('A média é ' + media);
console.log('Situação: ' + situacao);

