const productos = []
const IVA = 1.21
class Producto {
    constructor(nombre, importe, talle) {
        this.nombre = nombre
        this.importe = importe
        this.talle = talle
    }
    precioFinal() {
        return "$ " + parseFloat((this.importe * IVA).toFixed(2))
    }
}
productos.push(new Producto("Remera Nike", 3500, "XL"))
productos.push(new Producto("Zapatillas New Balance", 5000, "44"))
productos.push(new Producto("Pantalon deportivo", 2000, "XXL"))
productos.push(new Producto("Gorro", 2200, "L"))
productos.push(new Producto("Camisa lisa", 3123, "M"))
productos.push(new Producto("Zapatillas Converse", 5600, "38"))
productos.push(new Producto("Campera rompevientos vintage", 4200, "S"))
productos.push(new Producto("Buzo adidas", 4900, "XL"))
console.table(productos);

function listaHtml() {
    const lista = document.getElementById("lista")
    productos.forEach(producto => {
        lista.innerHTML += `<li>Producto: ${producto.nombre}|| Talle: ${producto.talle}|| Importe: $${producto.importe} </li>`
    })
}
function agregarProducto() {
    let descripcion = prompt(" ingrese nombre de la prenda de ropa")
    let importe = parseInt(prompt("Ingresa el importe:"))
    let talle = prompt("ingresa el talle")
    productos.push(new Producto(descripcion, importe, talle))
    
    
}
function cargarProducto(){
let entrada = confirm("desea cargar un producto?")
while (entrada) {
    agregarProducto();
    console.table(productos)
    listaHtml()
    entrada = confirm("desea seguir agregando?")
}

}
cargarProducto()

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

/*let entrada = confirm("desea agregar un producto?")
while (entrada) {
    agregarProducto();
    entrada = confirm("desea seguir agregando?")
}
*/
function filtrarProductosPrecio() {
    let prod = parseInt(prompt("Ingresa el precio máximo del producto que estes buscando"))
    const resultado = productos.filter(elemento => elemento.importe < prod)
    console.table(resultado)
}
function ordenarProductosMin() {
    console.table(productos)
    let orden = confirm("desea ordenar los productos por precio minimo?")
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
        console.table(productos)
    }
    listaHtml()
}