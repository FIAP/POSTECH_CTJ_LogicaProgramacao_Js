import prompt from 'prompt-sync';
let pergunte = prompt();


console.log('PROGRAMA DO CUPOM');


console.log('Informe o valor da compra:');
let valor = Number(pergunte());

console.log('Informe a porcentagem de desconto:');
let desconto = Number(pergunte());


let totalDesconto = valor * desconto / 100;
let totalCompra = valor - totalDesconto;


console.log('O total da compra é ' + totalCompra);
