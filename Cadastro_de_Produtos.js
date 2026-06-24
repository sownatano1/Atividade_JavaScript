/*
Sistema de Cadastro de Produtos
Uma loja deseja cadastrar produtos em seu sistema.

Crie um objeto contendo:
 * nome
 * categoria
 * preço (armazenado inicialmente como string)
 * quantidade em estoque

O programa deve:
 1. Converter o preço para número.
 2. Validar se o preço é válido.
 3. Criar uma função para exibir os dados do produto.
 4. Informar se o produto está com estoque baixo (menos de 10 unidades).
 5. Exibir todas as propriedades e valores do objeto.
 6. Exibir o tipo de cada informação utilizando typeof.
*/

const item = {
    item: "TV",
    categoria: "Eletrônico",
    preco: Number("1400"),
    estoque: 12, 
}

function Show(){
    if (item.preco === Number(item.preco)){
        console.log(`Produto: ${item.item}\nCategoria: ${item.categoria}\nPreço: ${item.preco}$`)
        item.preco >= 10?console.log("Estoque baixo"):console.log("Estoque adequado")

        console.log("========================")

        for(let key in item){
            console.log(`${item[key]} é um(a) ${typeof(item[key])}\n`)
        }
    }
    else{
        console.log("Preço do produdo inválido")
    }
}

Show()
