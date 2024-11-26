const preco = Number(prompt("Digite o preço do produto: "));
const parcela = Number(prompt("Digite o número da parcela: "));

if (parcela > 12  ){
  console.log("A loja apenas permite parcela até 12x\n Por favor aperte F5 para reiniciar a página");
  alert("A loja apenas permite parcela até 12x\n Por favor aperte F5 para reiniciar a página");
} else {
const avista = preco - (preco*0.1);
const parcelado = preco / parcela; 

alert("Preço R$: " + preco.toFixed(2) + "\nÀ Vista: " + avista.toFixed(2) + "\nOu " + parcela + "x de  R$: " + parcelado.toFixed(2));

console.log("Preço R$: " + preco.toFixed(2) + "\nÀ Vista: " + avista.toFixed(2) + "\nOu " + parcela + "x de  R$: " + parcelado.toFixed(2));

}

