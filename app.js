'use strict'
import produtos from './produtos.json' with {type: "json"}

function classificacaoEstrelas(numero){
    let resposta = ""
    let estrela = numero
    
    for(let i = 0; i < 5 ; i++ ){

        if(estrela > 0 ){

            resposta += "★"
            estrela--

        }else{
            resposta += "☆"
        }

    }

    return resposta

}

function criarCard(produto){
    const card = document.createElement('div')

    card.className = 'card'

    const imagem = document.createElement('img')
    imagem.src = `/img/${produto.imagem}`
    imagem.alt = `Foto do ${produto.nome}`

    const nome = document.createElement('h3')
    nome.textContent = produto.nome

    const descricao = document.createElement('span')
    descricao.textContent = produto.descricao

    const preco = document.createElement('h2')
    preco.textContent = `R$${produto.preco}`

    const classificacao = document.createElement('span')
    classificacao.textContent = classificacaoEstrelas(produto.classificacao)

    card.append(imagem,nome,descricao,classificacao,preco)

    return card

    
}



const cards = produtos.map(criarCard)

document.getElementById('container').replaceChildren(...cards)