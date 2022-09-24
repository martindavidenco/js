//VARIABLES Y CONSTANTES
const IVA = 1.21
const URL = "js/array.json"
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let productos = [];
let favoritos = []
let productosNuevos = [];
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
//Nodos
const carritoDiv = document.querySelector("#container")
const boton = document.querySelector("#botn")
const precio_menor = document.querySelector("#menorPrecio")
const precio_mayor = document.querySelector("#mayorPrecio")
const comprar = document.querySelector(".botonComprar")
let nombreProd = document.getElementById("nombreProd")
nombreProd.value = "Pantalon super fachero " ;
let talleProd = document.getElementById("talleProd")
talleProd.value = "XS y XL";
let precioProd = document.getElementById("precioProd")
precioProd.value = 6000;
let pMax = document.getElementById("outvol")
let pMin =  document.getElementById("outvol1")
let subir = document.getElementById("subir")
const cartelTotal = document.querySelector("#total"); 
let carritoLenght = document.querySelector(".carritoLenght")
const lista = document.getElementById("lista")
