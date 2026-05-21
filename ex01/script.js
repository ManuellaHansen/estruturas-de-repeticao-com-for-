let numero = Number(prompt("Insira um número:"));
let mensagem = "";

for (let contador = 1; contador <= numero; contador++) {
    mensagem = `${mensagem} ${contador}`
}
alert(mensagem)
