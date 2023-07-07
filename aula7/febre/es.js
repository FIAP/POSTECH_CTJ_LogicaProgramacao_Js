import prompt from 'prompt-sync';
let pergunte = prompt();


export function escrever(msg) {
  console.log(msg);
}

export function lerNumero(msg) {
  escrever(msg);
  let num = Number(pergunte());
  return num;
}

