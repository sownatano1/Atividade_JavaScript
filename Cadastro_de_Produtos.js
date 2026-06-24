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
