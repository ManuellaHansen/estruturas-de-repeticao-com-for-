let numero1 = Number(prompt("Insira um número:"));
let numero2 = Number(prompt("Insira outro número:"));
let mensagem = "";

for (let contador = numero1 + 1; contador < numero2; contador++) {
    if (contador%2 == 0) {
        mensagem = `${mensagem}${contador} `;
    }
}

alert(`Os números pares entre estes dois números são: ${mensagem}`);

