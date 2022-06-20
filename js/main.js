//Simulador de Compra de Comida y Bebida.

alert("Bienvenido a Cerveceria Amanecer");

//Creacion de catalogo.

class Producto{
    constructor(nombre, precio,ml){
        this.nombre = nombre;
        this.precio = precio;
        this.ml = ml;
    }
    info(){
        return this.nombre + " $" + this.precio + ` ml ` + this.ml;
    }
}

const producto1 = new Producto("cerveza IPA", 400, 500)
const producto2 = new Producto("cerveza IPA", 800, 1000)
const producto3 = new Producto("cerveza IPA", 1200, 1500)
const producto4 = new Producto("cerveza APA", 300, 500)
const producto5 = new Producto("cerveza APA", 600, 1000)
const producto6 = new Producto("cerveza APA", 900, 1500)
const producto7 = new Producto("cerveza Dorada Pampeana", 200, 500)
const producto8 = new Producto("cerveza Dorada Pampeana", 400, 1000)
const producto9 = new Producto("cerveza Dorada Pampeana", 600, 1500)
const producto10 = new Producto("cerveza AAA", 450, 500)
const producto11 = new Producto("cerveza AAA", 900, 1000)
const producto12 = new Producto("cerveza AAA", 1350, 1500)
const producto13 = new Producto("cerveza Bohemian Pils", 600, 500)
const producto14 = new Producto("cerveza Bohemian Pils", 1200, 1000)
const producto15 = new Producto("cerveza Bohemian Pils", 1800, 1500)

let productosCatalogo = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13,producto14,producto15]
let productosSeleccionados = [];

//solicitud al usuario.
let entrada1 = +prompt("Desea echar un vistazo al catalogo de productos?\n 1(SI) 2(NO)")

//Mostrar catalogo

let entrada2 = undefined;

function mostrarCatalogo2(array){
    let mensaje =`CATALOGO\n`
    +`ingresa el numero del prducto que quieras comprar: \n`;
    let oux;
    for(let i = 0 ; i < array.length; i++){
        oux = ( i+1 + `-` + array[i].info() + `\n`) 
        mensaje += oux
    }
    return mensaje;
}

if(entrada1 === 1){
   entrada2= +prompt (mostrarCatalogo2(productosCatalogo))-1;
}else if(entrada1 === 2){
    alert("Cerrando Cerveceria Amanecer...");
}else{
    alert("Entrada no valida")
    entrada1 = +prompt("¿desea comprar algo para comer y/o beber?\n1(SI) 2(NO)");
}

//Agregar Producto

function AgregarProducto(){
    productosCatalogo.forEach((producto, index)=>{
        console.log(entrada2)
        if(entrada2==index){
            productosSeleccionados.push(producto)
            console.log(productosSeleccionados)
        }
    })
}
let entrada3 = 1
while(entrada3 != 2){
    entrada3 = +prompt("Quiere agregar un nuevo producto? 1(SI) 2(NO)");
    if(entrada3 === 1){
        AgregarProducto();
        entrada2= +prompt (mostrarCatalogo2(productosCatalogo))-1;
    }else if(entrada3 === 2){
        AgregarProducto();
        carrito();
    }else{
        alert("Entrada Invalida")
        let entrada3 = +prompt("quiere agregar un nuevo producto 1(SI) 2(NO)");
    }
}
function mostrarCarrito(array){
    let mensaje =`CARRITO\n`
    +`productos de su compra \n`;
    let oux;
    for(let i = 0 ; i < array.length; i++){
        oux = ( i+1 + `-` + array[i].info() + `\n`) 
        mensaje += oux
    }
    oux = `Total: ` + array.reduce((accu,elem) => accu + elem.precio, 0);
    return mensaje += oux;
}
function carrito(){
    alert(mostrarCarrito(productosSeleccionados));
    let entrada4= +prompt ("Quiere enviarlo a domicilio? 1(SI) 2(NO)")
    if (entrada4 == 1){
        aux = `Nuevo total con envio: ` + (productosSeleccionados.reduce((accu,elem) => accu + elem.precio, 0)+500);
        alert(aux)
    }
}