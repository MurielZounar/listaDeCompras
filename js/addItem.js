import { criarItemLista } from "./criarItemLista.js"
import { verificarListaVazia } from "./verificarListaVazia.js"
import { verificarListaComprados } from "./verificarListaComprados.js"

const item = document.getElementById("input-item")
const listaCompras = document.getElementById("lista-compras")
const listaComprados = document.getElementById("lista-comprados")

verificarListaComprados(listaComprados)

export function adicionaItem(evento) {
    evento.preventDefault()

    if (item.value === "") {
        alert("Por favor, insira um item")
        return
    }

    const itemLista = criarItemLista(item)
    listaCompras.appendChild(itemLista)
    verificarListaVazia(listaCompras)
    item.value = ""
    item.focus()
}
