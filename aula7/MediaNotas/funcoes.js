

export function media(notas) {
  let soma = 0;

  for (let item of notas) {
    soma = soma + item;
  }

  let media = soma / notas.length;

  return media;
}