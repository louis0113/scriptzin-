const conta = Number(prompt("Digite o quanto deu sua conta: "));

const pessoas = Number(prompt("Digite quantas pessoas vão pagar: "));

const divi = conta / pessoas;

alert("O Valor da Conta R$: " + conta.toFixed(2) + "\nNúmero de Clientes: " + pessoas + "\nValor por ClientesR$: " + divi.toFixed(2));

console.log("O Valor da Conta R$: " + conta.toFixed(2) + "\nNúmero de Clientes: " + pessoas + "\nValor por Clientes R$: " + divi.toFixed(2));