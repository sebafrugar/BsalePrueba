const request = fetch("http://localhost:8000/api/prueba");
let productostotal= [];

fetch('http://localhost:8000/api/prueba')
    .then((response) =>{
        return response.json();
    }).then((response) =>{
        productostotal = response.productos
        const filtrar = response.productos.filter(filtro => filtro.category === 2);
        console.log(filtrar)
        document.getElementById("producto").innerHTML = response.productos.filter(filtro => filtro.category === 2).map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `).join('')
    })
    .catch(error => console.log(error))

let porNombre = async() => {
    await fetch('http://localhost:8000/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroAZ = response.productos.sort((a, b) => a.name.localeCompare(b.name));
        console.log(filtroAZ)
        document.getElementById("producto").innerHTML = filtroAZ.filter(filtro => filtro.category === 2).map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

let porPrecioMenorMayor = async() => {
    await fetch('http://localhost:8000/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroPrecioMenorMayor = response.productos.sort((a, b) => {
            return a.price - b.price;
        });
        console.log(filtroPrecioMenorMayor)
        document.getElementById("producto").innerHTML = filtroPrecioMenorMayor.filter(filtro => filtro.category === 2).map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

let porPrecioMayorMenor = async() => {
    await fetch('http://localhost:8000/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroPrecioMayorMenor = response.productos.sort((a, b) => {
            return b.price - a.price;
        });
        console.log(filtroPrecioMayorMenor)
        document.getElementById("producto").innerHTML = filtroPrecioMayorMenor.filter(filtro => filtro.category === 2).map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}

let porStock = async() => {
    await fetch('http://localhost:8000/api/prueba')
    .then((response) =>{
        return response.json();})
    .then((response) =>{
        const filtroStock = response.productos.sort((a, b) => {
            return b.discount - a.discount;
        });
        console.log(filtroStock)
        document.getElementById("producto").innerHTML = filtroStock.filter(filtro => filtro.category === 2).map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
    })
}
const formulario = document.getElementById("formulario")
const boton = document.getElementById("search")

const filtrar = async () => {
    let busqueda = formulario.value.toUpperCase()
    let resultado = []
    productostotal.map(producto => {
        if(producto.name.toUpperCase().includes(busqueda) === true){
            resultado.push(producto)
        }
    })
    document.getElementById("busqueda").innerHTML = resultado.map(producto => `
            <div class="card d-inline-block m-2" style="width: 17rem ;">
                <div class="card-header rounded text-center d-block">
                    <img src="${producto.url_image}" alt="imagen producto" srcset="" style="width: 100px; height: 150px ;align-middle;">
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">${producto.name}</li>
                    <li class="list-group-item">Valor : $ ${producto.price}</li>
                    <li class="list-group-item">Unidades Restantes :  ${producto.discount}</li>
                </ul>
            </div>    
        `)
};

boton.addEventListener("click", filtrar)
