import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA FORMATAÇÃO ABNT');


console.log('Informe o nome do autor:');
let nome = pergunte();


let primeiraLetra = nome.charAt(0);

let posEspaco = nome.indexOf(' ');
let ultimoNome = nome.substring(posEspaco+1, nome.length);

let abnt = ultimoNome.toUpperCase() + ', ' + primeiraLetra;

console.log(abnt);