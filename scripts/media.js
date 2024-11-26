const n1 = Number(prompt("Digite a 1º nota: "));
const n2 = Number(prompt("Digite a 2º nota: "));
const media = (n1+n2) / 2;

alert("1° nota: " + parseFloat(n1.toFixed(2)) + "\n2° nota: " + parseFloat(n2.toFixed(2)) + "\nMédia: " + parseFloat(media.toFixed(2)));

console.log("1° nota: " + parseFloat(n1.toFixed(2)) + "\n2° nota: " + parseFloat(n2.toFixed(2)) + "\nMédia: " + parseFloat(media.toFixed(2)))

if (media >= 7.0){
    console.log(" Voce foi aprovado! ");
    alert("Voce foi aprovado!")
} else if (media < 7.0 && media >= 5.0){
    console.log("Você está em recuperação! ");
    alert("Você está em recuperação! ");
} else {
    console.log("Você está reprovado!")
    alert("Você está reprovado!")
}