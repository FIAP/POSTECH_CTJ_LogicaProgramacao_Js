import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA FEBRE');

console.log('Informe a temperatura:');
let temperatura = Number(pergunte());


let situacao = '';

if (temperatura >= 37) {
  situacao = 'Está com febre';
}
else {
  situacao = 'Não está com febre';
}


console.log(situacao);

