//VARIABLES Y CONSTANTES
const IVA = 1.21
const URL = "js/array.json"
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let productos = [];
let favoritos = []
let productosNuevos = [];

//Nodos
const carritoDiv = document.querySelector("#container")
const boton = document.querySelector("#botn")
const precio_menor = document.querySelector("#menorPrecio")
const precio_mayor = document.querySelector("#mayorPrecio")
const comprar = document.querySelector(".botonComprar")
let nombreProd = document.getElementById("nombreProd")
nombreProd.addEventListener("click", ()=>{nombreProd.value=""})
nombreProd.value = "Pantalon super fachero " ;
let talleProd = document.getElementById("talleProd")
talleProd.addEventListener("click", ()=>{talleProd.value=""})
talleProd.value = "XS y XL";
let precioProd = document.getElementById("precioProd")
precioProd.addEventListener("click", ()=>{precioProd.value=""})
precioProd.value = 6000;
let pMax = document.getElementById("outvol")
let pMin =  document.getElementById("outvol1")
let subir = document.getElementById("subir")
const cartelTotal = document.querySelector("#total"); 
let carritoLenght = document.querySelector(".carritoLenght")
const lista = document.getElementById("lista")
 //   EVENTOS

 