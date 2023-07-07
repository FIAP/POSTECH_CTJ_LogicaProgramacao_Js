import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA QUAL SEMESTRE');

console.log('Informe o nome do mês:');
let mes = pergunte();



let semestre = '';

switch (mes) {
  case 'janeiro':
  case 'fevereiro':
  case 'março':
  case 'abril':
  case 'maio':
  case 'junho':
    semestre = 'Primeiro semestre';
    break;
  
  case 'janeiro':
  case 'fevereiro':
  case 'março':
  case 'abril':
  case 'maio':
  case 'junho':
    semestre = 'Segundo semestre';
    break;
}



console.log(semestre);
