const byId = id => document.getElementById(id)
window.onload = async () => {
    let query = new URLSearchParams(location.search)
    const appFilter = byId("mainFilter")
    const containerFilter = document.createElement("div")
    const loader = byId("loader")
    containerFilter.setAttribute("class", "container")
    appFilter.appendChild(containerFilter)
    if(query.get('criterioFiltro')){
        try{
            const response = await fetch(`https://script.google.com/macros/s/AKfycbwFe0V0kQa7AaLd0K0M5TzzWvZmkxwTX65sifVHYvwld99Korb--Pvnfw92V3yoWEPC/exec?columnaFiltro=marca&criterioFiltro=${query.get('criterioFiltro')}`)
            const {datos} = await response.json()
            console.log(datos)
            loader.style.display = "none"
            datos.forEach((celular) => {
                const card = document.createElement("div");
                card.setAttribute("class", "card");
          
                const image = document.createElement("img");
                image.src = `${celular.imagen}`
          
                const producto = document.createElement("h1");
                producto.textContent = celular.modelo;
          
                const link = document.createElement("a");
                link.textContent = "ver más"
                link.setAttribute('href', `detailProduct.html?criterioFiltro=${celular.idCelular}`)
          
                containerFilter.appendChild(card);
                card.appendChild(image)
                card.appendChild(producto);
                card.appendChild(link);
              });
        }catch(error){
            console.log(error)
        }
    }
}