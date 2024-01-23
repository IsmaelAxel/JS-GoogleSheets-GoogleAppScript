const $ = id => document.getElementById(id);
window.onload = async () => {
  const app = document.getElementById("main");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwFe0V0kQa7AaLd0K0M5TzzWvZmkxwTX65sifVHYvwld99Korb--Pvnfw92V3yoWEPC/exec')
    const {datos} = await response.json()
    console.log(datos)
    datos.forEach((celular) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const image = document.createElement("img");
      image.src = `${celular.imagen}`

      const producto = document.createElement("h1");
      producto.textContent = celular.modelo;

      const marca = document.createElement("p");
      marca.textContent = `Marca: ${celular.marca}`;

      const precio = document.createElement("p");
      precio.textContent = `Precio: ${celular.precio}`;

      const link = document.createElement("a");
      link.textContent = "ver más"
      link.setAttribute('href', `detailProduct.html?criterioFiltro=${celular.idCelular}`)


      container.appendChild(card);
      card.appendChild(image)
      card.appendChild(producto);
      card.appendChild(marca);
      card.appendChild(precio)
      card.appendChild(link);
    });


  } catch (error) {
    console.log(error)
  }
};


