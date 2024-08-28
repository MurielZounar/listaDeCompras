import { verificarListaComprados } from "./verificarListaComprados.js"
import { verificarListaVazia } from "./verificarListaVazia.js"

const listaCompras = document.getElementById("lista-compras")
const listaComprados = document.getElementById("lista-comprados")

const excluirItem = (elemento) => {
    let confirmacao = confirm("Confirma a exclusão do item?")

    if (confirmacao) {
        elemento.remove()
        verificarListaVazia(listaCompras)
        verificarListaComprados(listaComprados)
    }
}

export { excluirItem }
