//VARIABLES Y CONSTANTES
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let favoritos = []
const IVA = 1.21
const cartelTotal = document.querySelector("#total"); 
let carritoLenght = document.querySelector(".carritoLenght")
const URL = "js/array.json"
//Nodos
const carritoDiv = document.querySelector("#container")
const boton = document.querySelector("#botn")
const precio_menor = document.querySelector("#menorPrecio")
const precio_mayor = document.querySelector("#mayorPrecio")
const comprar = document.querySelector(".botonComprar")

let pMax = document.getElementById("outvol")
let pMin =  document.getElementById("outvol1")