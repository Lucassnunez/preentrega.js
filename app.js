
function obtenerDatosUsuario() {
    let nombreUsuario = prompt("Ingrese su nombre");
    let apellidoUsuario = prompt("Ingrese su apellido");
    let contraseniaIngresada = prompt("Ingrese su contraseña");
    return { nombreUsuario, apellidoUsuario, contraseniaIngresada };
}


function validarDatosUsuario(nombreUsuario, apellidoUsuario) {
    if (nombreUsuario !== "" && apellidoUsuario !== "") {
        console.log("Usuario: " + nombreUsuario + " " + apellidoUsuario);
        return true;
    } else {
        console.log("Todos los campos son obligatorios.");
        return false;
    }
}


function validarContrasenia(contraseniaIngresada, contrasenia) {
    while (contraseniaIngresada !== contrasenia) {
        console.log("Contraseña incorrecta. Vuelve a intentarlo.");
        alert("Contraseña incorrecta. Vuelve a intentarlo.");
        contraseniaIngresada = prompt("Ingrese su contraseña");
    }
    return contraseniaIngresada;
}

// Función para mostrar el mensaje de inicio de sesión exitoso
function mostrarMensajeExitoso() {
    console.log("Inicio de sesión con éxito. Bienvenido a Indumentaria GL");
    alert("Inicio de sesión con éxito. Bienvenido a Indumentaria LN");
}


function seleccionarPrenda() {
    let ropa = prompt(`¿Qué prenda deseas ver?
1: remeras
2: hoddies
3: rompevientos
4: joggins
`);
    
    switch (ropa) {
        case "remeras":
        case "1":
            console.log("Estás en la sección remeras");
            break;
        case "hoddies":
        case "2":
            console.log("Estás en la sección Hoddies");
            break;
        case "rompevientos":
        case "3":
            console.log("Estás en la sección Rompevientos");
            break;
        case "joggins":
        case "4":
            console.log("Estás en la sección Joggins");
            break;
        default:
            console.log("No contamos con ese tipo de prenda");
            alert("No contamos con ese tipo de prenda");
            break;
    }
}


function main() {
    const contrasenia = "0000";
    
    let { nombreUsuario, apellidoUsuario, contraseniaIngresada } = obtenerDatosUsuario();

    if (validarDatosUsuario(nombreUsuario, apellidoUsuario)) {
        contraseniaIngresada = validarContrasenia(contraseniaIngresada, contrasenia);
        mostrarMensajeExitoso();
        seleccionarPrenda();
    }
}


main();
