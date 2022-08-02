
function calculo(producto1, producto2, producto3) {
    alert("el total de su compra es de $" + (producto1 + producto2 + producto3))
}
let entrada = confirm("DESEA COMPRAR UN PRODUCTO?")
while (entrada) {
    let producto = prompt("Escribe el/los numero/s del producto que desea comprar. 1 celular 2 funda 3 cargador (Todo junto. Si desea por ejemplo un celular y cargador escriba 13. Si desea las tres cosas 123.");
    switch (producto) {
        case "1":
            alert("usted eligio un celular")
            calculo(10000, 0, 0)
            break;
        case "12":
            alert("usted eligio un celular y una funda")
            calculo(10000, 1000, 0)
            break;
        case "123":
            alert("usted eligio un celular, funda y cargador")
            calculo(10000, 1000, 1200)
            break;
        case "23":
            alert("usted eligio una funda y un cargador")
            calculo(0, 1200, 1000)
            break;
        case "13":
            alert("usted eligio un celular y un cargador")
            calculo(10000, 0, 1200)
            break;
        case "2":
            alert("usted eligio una funda")
            calculo(0, 1000, 0)
            break;
        case "3":
            alert("usted eligio un cargador")
            calculo(0, 0, 1200)
            break;
    }
    entrada = confirm("Desea seguir con la compra?");
}
alert("Gracias por su tiempo")