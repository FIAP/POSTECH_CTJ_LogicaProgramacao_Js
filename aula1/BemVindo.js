import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('Qual seu nome?');
let nome = pergunte();

console.log('Seja bem-vindo(a) ' + nome);

