
// Definición de variables y pedido de ingreso de datos.

let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
let contraseniaIngresada = prompt("Ingrese su contraseña")
const contraseniaCorrecta = "0000"

// Se busca que se ingresen todos los datos. 

if ((nombreUsuario != "") && (apellidoUsuario != "")) {
    console.log("Usuario: " + nombreUsuario + " " + apellidoUsuario);
} else {
    console.log("Todos los campos son obligatorios.");
}

let intentos = 1
const maxIntentos = 3

// FUNCION QUE RETORNA LA DIFERENCIA ENTRE EL MAXIMO DE INTENTOS ESTABLECIDO (limiteIntentos) Y LOS INTENTOS REALIZADOS (intentosRealizados)
function intentosRestantes(limiteIntentos, intentosRealizados) {
    return limiteIntentos - intentosRealizados;
}


while (contraseniaIngresada != contraseniaCorrecta && intentos < maxIntentos) {

    console.log("Contraseña incorrecta. Vuelve a intentarlo. Intentos: ", intentos)

    alert("Contraseña incorrecta. Vuelve a intentarlo. Intentos restantes: " + intentosRestantes(maxIntentos, intentos))

    // ACTUALIZO CONTADOR DE INTENTOS FALLIDOS
    intentos++
    contraseniaIngresada = prompt("Ingrese su contraseña")
}

// SE INGRESO LA CONTRASEÑA CORRECTA. MENSAJE DE BIENVENIDA.
if (contraseniaIngresada == contraseniaCorrecta) {
    console.log("Inicio de sesión con éxito. Bienvenido a Indumentaria LN")
    alert("Inicio de sesión con éxito. Bienvenido a Indumentaria LN")

    let ropa = prompt(`Que prenda deseas ver?
    1: Remeras
    2: Hoddies
    3: Rompevientos
    4: Joggins
    `)

    // OBJECT
    class Producto {
        constructor(nombre, stock, precio, disponible) {
            this.nombre = nombre;
            this.stock = stock;
            this.precio = precio;
            this.disponible = true;
        }
    }

    // INICIALIZO REMERAS
    const remera1 = new Producto("Remera blanca", 2, 2500)
    const remera2 = new Producto("Remera negra", 6, 2500)
    const remera3 = new Producto("Remera azul", 1, 2500)

    //INICIALIZANDO HODDIES
    const hoddie1 = new Producto("Hoddie blanco", 3, 5000)
    const hoddie2 = new Producto("Hoddie negro", 2, 5000)
    const hoddie3 = new Producto("Hoddie azul", 7, 5000)

    //INICIALIZANDO ROMPEVIENTOS
    const rompeviento1 = new Producto("Rompeviento blanco", 7, 6000)
    const rompeviento2 = new Producto("Rompeviento negro", 7, 6000)
    const rompeviento3 = new Producto("Rompeviento azul", 6, 6000)

    //INICIALIZANDO JOGGINGS
    const jogging1 = new Producto("Jogging blanco", 6, 7500)
    const jogging2 = new Producto("Jogging negro", 6, 7500)
    const jogging3 = new Producto("Jogging azul", 6, 7500)


    // ARRAY DE PRODUCTOS

    const listaRemeras = [remera1, remera2, remera3]
    const listaHoddies = [hoddie1, hoddie2, hoddie3]
    const listaRompevientos = [rompeviento1, rompeviento2, rompeviento3]
    const listaJoggings = [jogging1, jogging2, jogging3]


    switch (ropa) {
        case "Remeras":
        case "1":
            console.log("Sección remeras")
            alert("Bienvenido a la sección Remeras!")
            console.log(listaRemeras);
            break
        case "Hoddies":
        case "2":
            console.log("Sección Hoddies")
            alert("Bienvenido a la sección Hoddies!")
            console.log(listaHoddies);
            break
        case "Rompevientos":
        case "3":
            console.log("Sección Rompevientos")
            alert("Bienvenido a la sección Rompevientos!")
            console.log(listaRompevientos);
            break
        case "Joggins":
        case "4":
            console.log("Sección Joggings")
            alert("Bienvenido a la sección Joggings!")
            console.log(listaJoggings);
            break
        default:
            console.log("No contamos con ese tipo de prenda")
            alert("No contamos con ese tipo de prenda")
            break
    }
}

// SE ALCANZO EL LIMITE DE INTENTOS FALLIDOS. INTENTE NUEVAMENTE MAS TARDE.
if (intentos == maxIntentos) {
    console.log("Alcanzaste el limite de intentos fallidos. Vuelve a intentarlo mas tarde.");
    alert("Alcanzaste el limite de intentos fallidos. Vuelve a intentarlo mas tarde.")}