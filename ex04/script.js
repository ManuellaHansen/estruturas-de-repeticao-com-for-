let soma
soma = 0
let media
media = 0

for(let contador = 1; contador <= 5; contador++){
    let nota = Number (prompt("Insira nota para realização da média:"))
    soma = soma + nota
}
media = soma / 5
alert (`A média das notas é: ${media}`)
