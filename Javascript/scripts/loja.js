const preco = Number(prompt("Digite o preço do produto: "));
const parcela = Number(prompt("Digite o número da parcela: "));

const avista = preco - (preco/10);
const parcelado = preco / parcela; 

alert("Preço R$: " + preco.toFixed(2) + "\nÀ Vista: " + avista.toFixed(2) + "\nOu " + parcela + "x de  R$: " + parcelado.toFixed(2));

console.log("Preço R$: " + preco.toFixed(2) + "\nÀ Vista: " + avista.toFixed(2) + "\nOu " + parcela + "x de  R$: " + parcelado.toFixed(2));
