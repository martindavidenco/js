class Producto {
    constructor(nombre, importe, talle, id) {
        this.nombre = nombre
        this.importe = importe
        this.talle = talle
        this.id = id
    }
    precioFinal() {
        return "$ " + parseFloat((this.importe * IVA).toFixed(2))
    }
}
