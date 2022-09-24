//EVENTOS

precio_menor.addEventListener("click", ordenarProductosMin)
precio_mayor.addEventListener("click", filtrarProductosPrecio)
comprar.addEventListener("click", realizarCompra)
subir.addEventListener("click", mostrarProductosCargados)

// DECLARACION FUNCIONES


const cargarContenido = async ()=>{
    let jsonProductos 
    await fetch(URL)
        .then((response)=>response.json())
        .then((data) => {
            jsonProductos = data
            jsonProductos.forEach(jsonProd => {
                productos.push(jsonProd)
            })
        })
        
}
function listaHtml() {
    
    lista.innerHTML = ""
    fetch(URL)
        .then(ress => ress.json())
        .then(data => {
            productos = [...data]
            data.forEach(producto => {
                lista.innerHTML += `  
                                <div class="card" style="width: 16rem;">
                                    <img src="assets/productos/prod${producto.id}.jpg" class="card-img-top" alt="${producto.nombre} ${producto.talle}">
                                    <div class="card-body ">
                                    <h5 class="card-title">${producto.nombre}</h5>
                                    <p class="card-text">$ ${producto.importe}</p>
                                    <div>    <a class="btn btn-primary" id="btn-agregar${producto.id}">Agregar al carrito</a>
                                </div></div>
                                </div> `
            })
            funcionCarrito(productos);
        })
}

function carritoCantidad() {
    return carritoLenght.innerHTML = carrito.reduce((acc, el) => acc + el.cantidad, 0)
}
function visualizarCarrito() {
    carritoDiv.innerHTML = "";
    carrito.forEach((producto) => {
        carritoDiv.innerHTML += ` 
        <ul class='ul-modal'>
        <div class="imgCarro"><img src="assets/productos/prod${producto.id}.jpg" class="card-img-top" alt="${producto.nombre} ${producto.talle}"></div>
        <div class="infoModal"><li>Producto: ${producto.nombre}</li>
        <li>Talle: ${producto.talle}</li>
        <li>Precio: $${producto.importe} </li>
        <li>Cantidad: ${producto.cantidad} </li>
        <li class="imgCarro"> <a class="btn btn-primary" id="btn-eliminar${producto.id}">Borrar del carrito</a></li></div>
        </ul>`;
    })
    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarCarrito()
    totalCarrito()
}

function funcionCarrito(array) {
    array.forEach((producto) => {
        document.querySelector(`#btn-agregar${producto.id}`).addEventListener("click", () => {
            agregarCarrito(producto)
        })
    })

}

function agregarCarrito(producto) {
    let cantidad = carrito.some(prod => prod.id === producto.id);

    if (cantidad === false) {
        producto.cantidad = 1
        carrito.push(producto)
    } else {
        let find = carrito.find(productofind => productofind.id === producto.id);
        find.cantidad++
    }
    console.table(carrito)
    visualizarCarrito()
    mostrarMensaje(`${producto.nombre} agregado satisfactoriamente`, "agregado")
    carritoCantidad()
}

function borrarCarrito() {

    carrito.forEach((producto) => {
        document.querySelector(`#btn-eliminar${producto.id}`).addEventListener("click", () => {
            borrarProducto(producto)
        })
    })
}
function borrarProducto(producto) {
    let produc = carrito.find(prod => prod.id === producto.id);
    if (produc.cantidad == 1) {
        carrito = carrito.filter((productoFilter) => productoFilter.id !== producto.id)
        Swal.fire({
            icon: 'error',
            //title: 'Oops...',
            text: `${producto.nombre} eliminado del carro`,
            //footer: '<a href="">Why do I have this issue?</a>'
            background: "orange",
            confirmButtonColor: "red",
        })
    } else {
        produc.cantidad--
    }
    visualizarCarrito()

    carritoCantidad()
}

function totalCarrito() {
    cartelTotal.innerText = carrito.reduce((acc, el) => acc + (el.importe), 0)
}
function mostrarMensaje(mensaje, cssClass) {
    const div = document.createElement(`div`);
    div.className = `alert alert-${cssClass}`;
    div.appendChild(document.createTextNode(mensaje));
    // mostrando en dom
    const container = document.querySelector(`.mainExplorar`);
    const app = document.querySelector(`.navbar`);
    container.insertBefore(div, app);
    setTimeout(function () {
        document.querySelector(`.alert`).remove();
    }, 2500)
}

function agregarProducto() {
    let descripcion = nombreProd.value
    let importe = parseInt(precioProd.value)
    let talle = talleProd.value
    productosNuevos.push(new Producto(descripcion, importe, talle,))
}
function mostrarProductosCargados(){
    agregarProducto()
    productosNuevos.forEach(producto => {
        lista.innerHTML += `   <div class="card" style="width: 16rem;">
        <img src="/assets/revision-min.png" class="card-img-top" alt="${producto.nombre} ${producto.talle}">
        <div class="card-body ">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">$ ${producto.importe}</p>
            <a class="btn btn-primary" id="btn-agregar${producto.id}">Agregar al carrito</a>
        </div>
    </div>`
    });
}

function filtrarProductosPrecio() {

    let prod = parseInt(pMax.innerText)
    let pro1 = parseInt(pMin.innerText)
    let resultado = productos.filter(elemento =>elemento.importe < prod)
    let resultado2 = resultado.filter(elemento =>elemento.importe > pro1)
    console.table(resultado2)
    const lista = document.getElementById("lista")
    lista.innerHTML = ""
    resultado2.forEach(producto => {
        lista.innerHTML += `   <div class="card" style="width: 16rem;">
        <img src="assets/productos/prod${producto.id}.jpg" class="card-img-top" alt="${producto.nombre} ${producto.talle}">
        <div class="card-body ">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">$ ${producto.importe}</p>
        <a class="btn btn-primary" id="btn-agregar${producto.id}">Agregar al carrito</a>
        </div>
        </div>`
    })
    funcionCarrito(resultado2);
}
function ordenarProductosMin() {
    productos.sort(comparacion)
    lista.innerHTML = ""
    productos.forEach(producto => {
        lista.innerHTML += `  
                        <div class="card" style="width: 16rem;">
                            <img src="assets/productos/prod${producto.id}.jpg" class="card-img-top" alt="${producto.nombre} ${producto.talle}">
                            <div class="card-body ">
                            <h5 class="card-title">${producto.nombre}</h5>
                            <p class="card-text">$ ${producto.importe}</p>
                            <div>    <a class="btn btn-primary" id="btn-agregar${producto.id}">Agregar al carrito</a>
                        </div></div>
                        </div> `
    })
    funcionCarrito(productos);
}
function realizarCompra(){
    localStorage.removeItem("carrito")
    carritoDiv.innerHTML = "";
    cartelTotal.innerText = "";
    carritoLenght.innerHTML = "";
    carrito = []
    btnComprar()
}
function btnComprar() {
    Swal.fire({
        icon: 'success',
        title: 'Listo. ID de compra: #'+ Math.floor((Math.random() * 100000)),
        text: 'Su compra fue realizada exitosamente.',
        footer: 'Gracias por confiar en FLAME',
        background: "orange"
    })
}
//LLamado funciones

// productos.sort((a,b)=>{if(a.importe>b.importe){return 1}
// if (a.importe<b.importe){return -1}return 0})
function comparacion(a,b){
    return a.importe - b.importe
}

cargarContenido()
visualizarCarrito()
listaHtml()
carritoCantidad()