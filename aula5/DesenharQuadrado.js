import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA DESENHAR QUADRADO');

console.log('Informe o tamanho do quadrado:');
let qtd = Number(pergunte());



for (let linha = 1; linha <= qtd; linha++) {
  for (let coluna = 1; coluna <= qtd; coluna++) {
    process.stdout.write('* ');
  }
  console.log();
}