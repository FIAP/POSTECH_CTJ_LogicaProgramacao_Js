

export function calcularFatorial(numero) {
  let fat = 1
  for (let cont = 1; cont <= numero; cont++) {
    fat = fat * cont;
  }
  return fat;
}

