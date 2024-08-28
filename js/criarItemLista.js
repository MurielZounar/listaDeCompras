import { editarItem } from "./editarItem.js"
import { excluirItem } from "./excluirItem.js"
import { getData } from "./getData.js"
import { verificarListaComprados } from "./verificarListaComprados.js"

const listaCompras = document.getElementById("lista-compras")
const listaComprados = document.getElementById("lista-comprados")
let cont = 0

export function criarItemLista(item) {
    const itemLista = document.createElement("li")
    const containerLista = document.createElement("div")
    const containerItemCompra = document.createElement("div")
    const containerCb = document.createElement("div")
    const cbInput = document.createElement("input")
    const cbLabel = document.createElement("label")
    const cbCustom = document.createElement("div")
    const nomeItem = document.createElement("p")
    const containerBtn = document.createElement("div")
    const btnRemove = document.createElement("button")
    const imgRemove = document.createElement("img")
    const btnEditar = document.createElement("button")
    const imgEditar = document.createElement("img")

    containerLista.classList.add("item-lista-container")
    containerItemCompra.classList.add("container-nome-compra")
    containerCb.classList.add("chekbox-container")
    cbInput.type = "checkbox"
    cbInput.classList.add("checkbox-input")
    cbInput.id = "checkbox-" + cont++
    cbLabel.setAttribute("for", cbInput.id)

    cbLabel.addEventListener("click", function (evento) {
        const checkbox = evento.currentTarget.querySelector("#" + cbInput.id)
        const cbCustom = evento.currentTarget.querySelector(".checkbox-custom")
        const itemTitulo = evento.currentTarget
            .closest("li")
            .querySelector("#item-titulo")

        if (checkbox.checked) {
            cbCustom.classList.add("checked")
            itemTitulo.style.textDecoration = "line-through"
            listaComprados.appendChild(itemLista)
        } else {
            cbCustom.classList.remove("checked")
            itemTitulo.style.textDecoration = "none"
            listaCompras.appendChild(itemLista)
        }

        verificarListaComprados(listaComprados)
    })

    cbCustom.classList.add("checkbox-custom")
    cbLabel.appendChild(cbInput)
    cbLabel.appendChild(cbCustom)
    containerCb.appendChild(cbLabel)
    nomeItem.id = "item-titulo"
    nomeItem.innerHTML = item.value
    btnRemove.classList.add("btn-acao")
    imgRemove.src = "img/delete.svg"
    imgRemove.alt = "Botão remover"

    btnRemove.addEventListener("click", function () {
        excluirItem(itemLista)
    })

    btnRemove.appendChild(imgRemove)
    containerBtn.appendChild(btnRemove)
    btnEditar.classList.add("btn-acao")
    imgEditar.src = "img/edit.svg"
    imgEditar.alt = "Botão editar"

    btnEditar.addEventListener("click", function () {
        editarItem(itemLista)
    })

    btnEditar.appendChild(imgEditar)
    containerBtn.appendChild(btnEditar)

    containerLista.appendChild(containerItemCompra)
    containerItemCompra.appendChild(containerCb)
    containerItemCompra.appendChild(nomeItem)
    containerLista.appendChild(containerBtn)
    itemLista.appendChild(containerLista)
    itemLista.appendChild(getData())

    return itemLista
}
