import { adicionaItem } from "./js/addItem.js"

const item = document.getElementById("input-item")
const btnSalvar = document.getElementById("adicionar-btn")

item.focus()
btnSalvar.addEventListener("click", adicionaItem)
