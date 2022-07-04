const listas = document.querySelectorAll(".filtro li")
const cards = document.querySelectorAll(".cards .producto")

listas.forEach(li => {
    li.addEventListener("click", e => {
        const valorLista = li.textContent
        cards.forEach(productos => {
          productos.style.display = "none"

          if(productos.getAttribute("data-filter") === valorLista || valorLista === "All Menu"){
            productos.style.display = "block"
          }
        })
    })
})