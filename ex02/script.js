let soma = 0; 

for (let contador = 1; contador <= 10; contador++) {
    let numero = Number(prompt(`Insira o ${contador}º número`))
    soma = soma + numero
}
alert (`O resultado da soma é ${soma}`);
