//VARIABLES Y CONSTANTES
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
const IVA = 1.21
const cartelTotal = document.querySelector("#total"); 
let carritoLenght = document.querySelector(".carritoLenght")
//Nodos
const carritoDiv = document.querySelector("#container")
const boton = document.querySelector("#botn")
const precio_menor = document.querySelector("#menorPrecio")
const precio_mayor = document.querySelector("#mayorPrecio")
const comprar = document.querySelector(".botonComprar")