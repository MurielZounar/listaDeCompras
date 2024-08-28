import { getData } from "./getData.js"

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo item:")
    
    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTxtAtualizado = elemento.querySelector("#item-titulo")
        const dataItemAtualizada = elemento.querySelector('.item-lista-texto')
        
        console.log(elemento)

        itemTxtAtualizado.textContent = novoItem
        dataItemAtualizada.textContent = 'Editado em: ' + getData().innerText

        const comprado = elemento.querySelector(".checkbox-input").checked

        if (comprado) {
            elemento.querySelector(".checkbox-input") = true
            elemento.querySelector(".checkbox-custom").classList.add('checked')
            itemTxtAtualizado.style.textDecoration = 'line-through'
        }
    }
}

