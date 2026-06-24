/*
Sistema de Biblioteca
Crie um sistema que receba uma lista de autores separados por vírgula.

O programa deve:
 1. Transformar a string em array.
 2. Exibir cada autor.
 3. Informar se existe determinado autor.
 4. Criar uma função que receba título e autor.
 5. Retornar uma mensagem formatada utilizando Template Literal.
 6. Exibir a lista novamente utilizando join().
*/

const autores = "Machado de Assis,Clarice Lispector,Monteiro Lobato,J. K. Rowling,J. R. R. Tolkien"

const lista = autores.split(",")
const escolhido = lista[2]

for(let autor in lista){
    console.log(lista[autor])
}

lista.includes("Monteiro Lobato")?console.log(`Autor '${escolhido}' foi encontrado na lista`):console.log("Autor não encontrado")

function livro(titulo, autor){
    console.log(`O autor '${autor}' escreveu o livro '${titulo}'`)
}

livro("Dom Casmurro","Machado de Assis")

lista.join(" | ")