
let nacimiento = parseInt(prompt("Ingrese su año de nacimiento"))
let año = parseInt(prompt("ingrese un año en el futuro"))
let resultado = año - nacimiento
let faltan = 65 - resultado

for (resultado; resultado < 70; resultado++) {
    if (resultado < 18) {
        console.log("En el año " + año + " sos menor, te faltan " + (65 - resultado) + " años")
    } else if (resultado < 30) {
        console.log("En el año " + año + " te faltan " + (65 - resultado) + " años, es bastante tenes que laburar mas papi")
    } else if (resultado <= 65) {
        console.log("En el año " + año + " te faltan " + (65 - resultado) + " años, ya casi campeon")
    } else if (resultado > 65) {
        console.log("En el año " + año + " ya te jubilaste hace " + (resultado - 65) + " años, a descansar!")
    } else {
        console.warn("ingresa un numero");
    }
    año++;
}