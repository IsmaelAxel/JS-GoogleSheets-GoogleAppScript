const $ = id => document.getElementById(id);
window.onload = async () => {
    let query = new URLSearchParams(location.search)
    if(query.get('criterioFiltro')){
        const response = await fetch(`https://script.google.com/macros/s/AKfycbwFe0V0kQa7AaLd0K0M5TzzWvZmkxwTX65sifVHYvwld99Korb--Pvnfw92V3yoWEPC/exec?columnaFiltro=idCelular&criterioFiltro=${query.get('criterioFiltro')}`)
        const result = await response.json()
        console.log(result.datos)
    }
}