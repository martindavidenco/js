const productos = []
function buscarProducto(){
    debugger
    let buscar = prompt("ingresa el nombre del producto a buscar");
    let posicion = productos.indexOf(buscar);
    if (posicion !== -1){
        alert(nombre + " esta en el indice número: " + posicion);
    } else {
        alert("El producto no se encuentra en el catálogo");
    }
}
const IVA = 1.21
class Producto {
    constructor(nombre, importe, talle){
        this.nombre = nombre
        this.importe = importe 
        this.talle = talle
    }
    precioFinal(){
        return parseFloat ((this.importe * IVA).toFixed(2))
    }
}

function agregarProducto() {
    let descripcion = prompt (" ingrese nombre de la prenda de ropa")
    let importe = parseInt (prompt("Ingresa el importe:"))
    let talle = prompt ("ingresa el talle")
    productos.push(new Producto (descripcion, importe, talle))
    console.table(productos);
}

function generadorProductos(){
    productos.push(new Producto("Remera Nike",3500,"XL" ) )
    productos.push(new Producto( "Zapatillas New Balance",5000 ,"44" ) )
    productos.push(new Producto("Pantalon deportivo",2000,"XXL" ) )
    productos.push(new Producto("Gorro" ,2200 ,"L" ) )
    productos.push(new Producto("Camisa lisa" ,3123 ,"M" ) )
    productos.push(new Producto("Zapatillas Converse",5600 ,"38" ) )
    productos.push(new Producto("Campera rompevientos vintage" ,4200 ,"S" ) )
    productos.push(new Producto( "Buzo adidas",4900 ,"XL" ) )
    console.table(productos);
}
