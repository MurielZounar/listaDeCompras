const tituloComprados = document.getElementById("comprados-titulo")
const linhasComprados = document.getElementById("comprados-linha")

export function verificarListaComprados(lista) {
    if (lista.querySelectorAll("li").length === 0) {
        tituloComprados.style.display = "none"
        linhasComprados.style.display = "none"
    } else {
        tituloComprados.style.display = "block"
        linhasComprados.style.display = "block"
    }
}
