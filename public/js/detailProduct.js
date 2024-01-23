const $ = id => document.getElementById(id);
window.onload = async () => {
    let query = new URLSearchParams(location.search)
    const appDetail = document.getElementById("mainDetail")
    const containerDetail = document.createElement("div")
    containerDetail.setAttribute("class", "containerDetail")
    appDetail.appendChild(containerDetail)
    if(query.get('criterioFiltro')){
        try {
            const response = await fetch(`https://script.google.com/macros/s/AKfycbwFe0V0kQa7AaLd0K0M5TzzWvZmkxwTX65sifVHYvwld99Korb--Pvnfw92V3yoWEPC/exec?columnaFiltro=idCelular&criterioFiltro=${query.get('criterioFiltro')}`)
            const {datos} = await response.json()

            console.log(datos)

            const cardDetail = document.createElement("div");
            cardDetail.setAttribute("class", "cardDetail");

            const returnDetail = document.createElement("a")
            returnDetail.textContent = "←"
            returnDetail.setAttribute("href", "index.html")
            returnDetail.setAttribute("class", "cardDetail__returnIndex")

            const imageDetail = document.createElement("img")
            imageDetail.src = `${datos[0].imagen}`
            
            const infoDetail = document.createElement("div")
            infoDetail.setAttribute("class", "infoDetail")

            const productoDetail = document.createElement("h1")
            productoDetail.textContent = datos[0].modelo 

            const marcaDetail = document.createElement("h2")
            marcaDetail.textContent = `Marca: ${datos[0].marca}`;

            const precioDetail = document.createElement("p")
            precioDetail.textContent = `Precio: ${datos[0].precio}`

            const lanzamientoDetail = document.createElement("p")
            lanzamientoDetail.textContent = `Fecha de lanzamiento: ${datos[0].lanzamiento}`

            

            containerDetail.appendChild(cardDetail)
            cardDetail.appendChild(returnDetail)
            cardDetail.appendChild(imageDetail)
            cardDetail.appendChild(infoDetail)
            infoDetail.appendChild(productoDetail)
            infoDetail.appendChild(marcaDetail)
            infoDetail.appendChild(precioDetail)
            infoDetail.appendChild(lanzamientoDetail)

        } catch (error) {
            console.log(`Ups, en este momento no se pudo cargar este producto. Error: ${error}`)
        }
    }else{

    }
}