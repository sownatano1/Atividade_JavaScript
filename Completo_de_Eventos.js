/*
Sistema Completo de Eventos
Uma empresa está organizando eventos.

Crie um objeto contendo:
 * nome do evento
 * local
 * data
 * participantes (array)

O sistema deve:
 1. Exibir a data formatada no padrão brasileiro.
 2. Informar quantos participantes existem.
 3. Verificar se existe pelo menos um participante.
 4. Criar uma função para exibir os dados do evento.
 5. Exibir as propriedades e valores do objeto.
 6. Verificar se a propriedade local existe.
 7. Exibir o tipo de cada informação.
*/

const evento = {
    nome: "Semana da Tecnologia",
    local: "Joinville",
    data: new Date("2026-06-24"),
    participantes: ["Gabriel", "Ana", "Carlos", "Enzo"]
}

let data = evento.data.toLocaleDateString("pt-BR")

function ExibirDados(){
    console.log(`Evento: ${evento.nome}\nData: ${data}`)

    if(evento.participantes.length > 0){
    console.log(`Total de participantes: ${evento.participantes.length}`)
    }
    else{
        console.log("Não há participantes no evento")
    }
}

ExibirDados()

for(let [property, value] of Object.entries(evento)){
    switch(property){
        case "nome":
            console.log(`${property} : ${value} = ${typeof(value)}`)
            continue
        case "local":
            console.log(`${property} : ${value} = ${typeof(value)}`)
            continue
        case "data":
            console.log(`${property} : ${data} = ${typeof(data)}`)
            continue
        case "participantes":
            console.log(`${property} : ${value} = Array`)
            continue
        default:
            console.log("Propriedade não encontrada")
    }
}