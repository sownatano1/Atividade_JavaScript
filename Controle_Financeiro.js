/*
Sistema de Controle Financeiro
Uma pessoa registrou seus gastos mensais em formato texto.
Crie um array contendo valores monetários.

O sistema deve:
 1. Converter os valores para número.
 2. Ignorar valores inválidos.
 3. Somar os gastos válidos.
 4. Exibir o total.
 5. Informar se o total ultrapassou R$ 2.000.
 6. Criar uma função responsável pelo cálculo.
*/

const valores = ["430", "185", "849", "abc", "730", "0", "600"]

let valores_validos = valores.filter(x => x > 0)

let soma = 0

function calculo(){
    for(let num in valores_validos){
        let valor = Number(valores_validos[num])
        soma = soma + valor
    }
    console.log(`A soma é ${soma}`)
}

calculo()

soma >= 2000?console.log("Limite ultrapassado"):console.log("Limite não ultrapassado")