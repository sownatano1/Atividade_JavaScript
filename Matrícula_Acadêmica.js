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