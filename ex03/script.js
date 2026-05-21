let numero = Number(prompt("Insira um número:"));
let mensagem = "";

for (let contador = 1; contador <= 10; contador++) {
    let multiplicacao = numero * contador
    mensagem = `${mensagem} ${multiplicacao}`
}

alert(`A tabuada de 1 a 10 desse número é ${mensagem}`)
