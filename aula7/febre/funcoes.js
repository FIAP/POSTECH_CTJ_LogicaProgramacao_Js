

export function verificarFebre(temp) {
  let situacao = ''

  if (temp >= 37) {
    situacao = 'Está com febre';
  }
  else {
    situacao = 'Não está com febre';
  }

  return situacao;
}

