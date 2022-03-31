// 1. selecionou as tags
//2. interceptar(pegar um evento de clique) o clique no botão
//3. pegar as informações que estão dentro do campo

const btnSortear     = document.querySelector(".botaoSortear")
const textarea       = document.querySelector("textarea")
const tagResultado   = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const btnFechar      = document.querySelector(".fechar")


// pegando dados do formulário
function pegarDadosFormulario(){

    //recuperando valor no campo (textarea)
    const valorCampo   = textarea.value //cria uma variavel "valorCampo" pra guardar os valores do campo "textarea" no html
    const listaNomes   = valorCampo.split(",") //split(",") separa os dados inseridos no caso por vírgula
    const tamanhoArray = listaNomes.length //guarda o tamanho do array(quantidade de nomes inseridos pelo usuário)
    const posicaoNome  = gerarNumeroAleatorio(tamanhoArray)
    const nome         = listaNomes[posicaoNome]
    mostrarResultado(nome)

    //textarea.value = "" //limpa o campo de texto após fazer o sorteio
    

    console.log(listaNomes[posicaoNome])

}
//interceptando o clique e executando função
btnSortear.addEventListener("click", pegarDadosFormulario)
//gerando o número aleatório
function gerarNumeroAleatorio(tamanhoArray){
    //Math.floor = arredonda os valores quebrados para inteiros  | Math.random() * (max - min) + min -> retorna os valores de forma randômica
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0); 
}

function mostrarResultado(nome){
    console.log(nome)

    //resultado
    tagResultado.innerText = `Resultado: ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp() {
    popUpResultado.classList.remove("mostrarResultado")
}
btnFechar.addEventListener("click", fecharPopUp)

