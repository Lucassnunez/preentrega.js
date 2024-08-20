// Definición de variables y pedido de ingreso de datos.
let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
let contraseniaIngresada = prompt("Ingrese su contraseña");
const contraseniaCorrecta = "0000";

// Se busca que se ingresen todos los datos.
if ((nombreUsuario != "") && (apellidoUsuario != "")) {
    console.log("Usuario: " + nombreUsuario + " " + apellidoUsuario);
} else {
    console.log("Todos los campos son obligatorios.");
}

// Defino un array de productos que voy a mostrar como catálogo.
let productos = [
    { id: 1, titulo: "Remera blanca", precio: 2500 },
    { id: 2, titulo: "Remera negra", precio: 2500 },
    { id: 3, titulo: "Remera azul", precio: 2500 },
    { id: 4, titulo: "Hoddie blanco", precio: 5000 },
    { id: 5, titulo: "Hoddie negro", precio: 5000 },
    { id: 6, titulo: "Hoddie azul", precio: 5000 },
    { id: 7, titulo: "Rompeviento blanco", precio: 6000 },
    { id: 8, titulo: "Rompeviento negro", precio: 6000 },
    { id: 9, titulo: "Rompeviento azul", precio: 6000 },
    { id: 10, titulo: "Jogging negro", precio: 7500 },
    { id: 11, titulo: "Jogging blanco", precio: 7500 },
    { id: 12, titulo: "Jogging azul", precio: 7500 },
];

localStorage.setItem("catalogo", JSON.stringify(productos));
const productosLocalStorage = JSON.parse(localStorage.getItem("catalogo"));
const carrito = [];

const divCatalogo = document.getElementById("catalogo");
const divCarrito = document.getElementById("carrito");

for (let i = 0; i < productosLocalStorage.length; i++) {
    const producto = productosLocalStorage[i];

    // PASO 1 - Creo el elemento div vacío y lo guardo en una variable.
    let contenedor = document.createElement("div");

    // PASO 2 - Completo mi div vacío con el producto que quiero mostrar.
    contenedor.innerHTML = `
     <div class="card mb-2" style="width: 18rem;">
     <div class="card-body">
      <h5 class="card-title">${producto.titulo}</h5>
      <p class="card-text">$${producto.precio}</p>
      <button onclick="añadirProducto(${i})" id="agregar-carrito-btn" class="btn btn-primary">Agregar al carrito</button>
     </div>
     </div>
     `;

    // PASO 3 - Inyecto el div del producto en el HTML.
    divCatalogo.appendChild(contenedor);
}

let intentos = 1;
const maxIntentos = 3;

// Función que retorna la diferencia entre el máximo de intentos establecido (limiteIntentos) y los intentos realizados (intentosRealizados).
function intentosRestantes(limiteIntentos, intentosRealizados) {
    return limiteIntentos - intentosRealizados;
}

function añadirProducto(index) {
    const producto = productosLocalStorage[index];
    carrito.push(producto);
    console.log("Producto añadido al carrito: " + producto.titulo);
    console.log(carrito);

    let productoCarrito = document.createElement("div");
    productoCarrito.innerHTML = `
    <div class="card mb-2" style="width: 18rem;">
    <div class="card-body">
     <h5 class="card-title">${producto.titulo}</h5>
     <p class="card-text">$${producto.precio}</p>
     <button onclick="eliminarProducto(${index})" id="agregar-carrito-btn" class="btn btn-danger">Eliminar del carrito</button>
    </div>
    </div>
    `;

    divCarrito.appendChild(productoCarrito);
}

while (contraseniaIngresada != contraseniaCorrecta && intentos < maxIntentos) {
    console.log("Contraseña incorrecta. Vuelve a intentarlo. Intentos: ", intentos);
    alert("Contraseña incorrecta. Vuelve a intentarlo. Intentos restantes: " + intentosRestantes(maxIntentos, intentos));

    // Actualizo el contador de intentos fallidos.
    intentos++;
    contraseniaIngresada = prompt("Ingrese su contraseña");
}

// Se ingresó la contraseña correcta. Mensaje de bienvenida.
if (contraseniaIngresada == contraseniaCorrecta) {
    console.log("Inicio de sesión con éxito. Bienvenido a Indumentaria LN");
    alert("Inicio de sesión con éxito. Bienvenido a Indumentaria LN");

    let ropa = prompt(`¿Qué prenda deseas ver?
    1: Remeras
    2: Hoddies
    3: Rompevientos
    4: Joggins
    `);

    // Clase Producto
    class Producto {
        constructor(nombre, stock, precio, disponible) {
            this.nombre = nombre;
            this.stock = stock;
            this.precio = precio;
            this.disponible = disponible;
        }
    }

    // Inicializo remeras
    const remera1 = new Producto("Remera blanca", 2, 2500, true);
    const remera2 = new Producto("Remera negra", 6, 2500, true);
    const remera3 = new Producto("Remera azul", 1, 2500, true);

    // Inicializando hoddies
    const hoddie1 = new Producto("Hoddie blanco", 3, 5000, true);
    const hoddie2 = new Producto("Hoddie negro", 2, 5000, true);
    const hoddie3 = new Producto("Hoddie azul", 7, 5000, true);

    // Inicializando rompevientos
    const rompeviento1 = new Producto("Rompeviento blanco", 7, 6000, true);
    const rompeviento2 = new Producto("Rompeviento negro", 7, 6000, true);
    const rompeviento3 = new Producto("Rompeviento azul", 6, 6000, true);

    // Inicializando joggings
    const jogging1 = new Producto("Jogging blanco", 6, 7500, true);
    const jogging2 = new Producto("Jogging negro", 6, 7500, true);
    const jogging3 = new Producto("Jogging azul", 6, 7500, true);

    // Array de productos
    const listaRemeras = [remera1, remera2, remera3];
    const listaHoddies = [hoddie1, hoddie2, hoddie3];
    const listaRompevientos = [rompeviento1, rompeviento2, rompeviento3];
    const listaJoggings = [jogging1, jogging2, jogging3];

    switch (ropa) {
        case "1":
        case "Remeras":
            console.log("Sección remeras");
            alert("¡Bienvenido a la sección Remeras!");
            console.log(listaRemeras);
            break;
        case "2":
        case "Hoddies":
            console.log("Sección Hoddies");
            alert("¡Bienvenido a la sección Hoddies!");
            console.log(listaHoddies);
            break;
        case "3":
        case "Rompevientos":
            console.log("Sección Rompevientos");
            alert("¡Bienvenido a la sección Rompevientos!");
            console.log(listaRompevientos);
            break;
        case "4":
        case "Joggins":
            console.log("Sección Joggings");
            alert("¡Bienvenido a la sección Joggings!");
            console.log(listaJoggings);
            break;
        default:
            console.log("No contamos con ese tipo de prenda");
            alert("No contamos con ese tipo de prenda");
            break;
    }
}

// Se alcanzó el límite de intentos fallidos. Intente nuevamente más tarde.
if (intentos == maxIntentos) {
    console.log("Alcanzaste el límite de intentos fallidos. Vuelve a intentarlo más tarde.");
    alert("Alcanzaste el límite de intentos fallidos. Vuelve a intentarlo más tarde.");
}
