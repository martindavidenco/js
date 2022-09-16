//EVENTOS
boton.addEventListener("click", cargarProducto)
precio_menor.addEventListener("click", ordenarProductosMin)
precio_mayor.addEventListener("click", filtrarProductosPrecio)
comprar.addEventListener("click", btnComprar)

// DECLARACION FUNCIONES
let productos = [];
// fetch(URL)
// .then(ress => ress.json())
// .then(data => {
//     productos = [...data]})
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
cargarContenido()
function listaHtml() {
    const lista = document.getElementById("lista")
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
    let descripcion = prompt(" ingrese nombre de la prenda de ropa")
    let importe = parseInt(prompt("Ingresa el importe:"))
    let talle = prompt("ingresa el talle")
    productos.push(new Producto(descripcion, importe, talle))
}
function cargarProducto() {
    let entrada = confirm("desea cargar un producto?")
    while (entrada) {
        agregarProducto();
        console.table(productos)
        listaHtml()
        entrada = confirm("desea agregar otro?")
    }
}

function buscarProducto() {
    let buscar = prompt("ingresa el nombre del producto a buscar");
    for (let producto of productos) {
        if (producto.nombre == buscar) {
            let posicion = productos.indexOf(producto);
            console.log(posicion);
            if (posicion !== -1) {
                alert(producto.nombre + " esta en el indice número: " + posicion);
            } else {
                alert("El producto no se encuentra en el catálogo");
            }
        }
    }
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
    let orden = true
    if (orden) {
        productos.sort((a, b) => {
            if (a.importe > b.importe) {
                return 1
            }
            if (a.importe < b.importe) {
                return -1
            }
            return 0
        })

        listaHtml()
    }
}

function btnComprar() {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Estamos trabajando en la seccion de compras',
        footer: 'Disculpen las molestias',
        background: "orange"
    })
}
//LLamado funciones

cargarContenido()
visualizarCarrito()
listaHtml()
carritoCantidad()