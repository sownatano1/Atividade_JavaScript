/*
Sistema de Matrícula Acadêmica
Uma universidade deseja controlar as disciplinas matriculadas por um aluno.
Crie um array contendo as disciplinas cursadas.

O programa deve:
 1. Exibir todas as disciplinas.
 2. Informar a quantidade de disciplinas.
 3. Verificar se o aluno cursa "JavaScript".
 4. Adicionar uma nova disciplina.
 5. Percorrer todas as disciplinas utilizando for.
 6. Ignorar disciplinas vazias utilizando continue.
 7. Encerrar o laço caso encontre a disciplina "TCC".
*/

let disciplina = ["HTML", "CSS", "JavaScript","Banco de Dados", "", "TCC"]

disciplina.includes("JavaScript")?console.log("O aluno está cursando JavaScript"):console.log("Disciplina não encontrada")

disciplina.push("Redes") //Adicionando a disciplina "Redes" 

console.log(`${disciplina}\nTotal ${disciplina.length}`)

for(let i in disciplina){
    if(disciplina[i] == false){
        continue
    }

    else if(disciplina[i] == "TCC"){
        break
    }

    console.log(disciplina[i])
}