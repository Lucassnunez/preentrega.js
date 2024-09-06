



// Obtener referencia al elemento del DOM para el catálogo
const divCatalogo = document.getElementById("catalogo");

// Obtener referencia al formulario y al botón de ingreso
const formIngreso = document.getElementById("formIngreso");
const btnIngresar = document.getElementById("btnIngresar");

// Obtener referencia al elemento del DOM para el carrito
const divCarrito = document.getElementById("carrito");

// Función para cargar los productos desde el archivo JSON local
async function cargarProductos() {
  try {
    const response = await fetch("../JSON/productos.json"); // Reemplaza con la ruta correcta de tu archivo JSON
    const productos = await response.json();
    localStorage.setItem('catalogo', JSON.stringify(productos));
    return productos;
  } catch (error) {
    throw error;
  }
}

// Función para renderizar el botón de acción en el catálogo
function renderizarBotonAccion(index) {
  const producto = productosLocalStorage[index];

  if (producto) {
    return `<button onclick="añadirProducto(${index})" class="btn btn-primary bg-black">Agregar al carrito</button>`;
  }
}

// Función para renderizar el carrito
function renderizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  divCarrito.innerHTML = "";

  carrito.forEach((producto) => {
    let productoCarrito = document.createElement("div");
    productoCarrito.className = "card mb-2";
    productoCarrito.style = "width: 18rem;";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = producto.titulo;

    let precio = document.createElement("p");
    precio.className = "card-text";
    precio.textContent = `$${producto.precio}`;

    // Mostrar la cantidad
    let cantidadElement = document.createElement("p");
    cantidadElement.textContent = `Cantidad: ${producto.cantidad}`;

    let quitarBtn = document.createElement("button");
    quitarBtn.className = "btn btn-warning";
    quitarBtn.textContent = "Quitar un producto";
    quitarBtn.onclick = () => restarProducto(producto.id);

    let eliminarBtn = document.createElement("button");
    eliminarBtn.className = "btn btn-danger";
    eliminarBtn.textContent = "Eliminar del carrito";
    eliminarBtn.onclick = () => eliminarProducto(producto.id);

    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(cantidadElement);
    cardBody.appendChild(quitarBtn);
    cardBody.appendChild(eliminarBtn);

    productoCarrito.appendChild(cardBody);
    divCarrito.appendChild(productoCarrito);
  });
}

// Cargar productos al iniciar la aplicación
 cargarProductos()
  .then(() => {
    // Renderizar el catálogo después de cargar los productos
    renderizarCatalogo();
  })
  .catch((error) => {
  });

// Función para añadir un producto al carrito
function añadirProducto(index) {
  const producto = productosLocalStorage[index];

  // Obtener el carrito del localStorage o inicializarlo como un array vacío
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Verificar si el producto ya está en el carrito
  const productoEnCarrito = carrito.find((p) => p.id === producto.id);

  if (productoEnCarrito) {
    // Si el producto ya está en el carrito, aumentar la cantidad
    productoEnCarrito.cantidad++;
  } else {
    // Si el producto no está en el carrito, agregarlo con cantidad 1
    carrito.push({ ...producto, cantidad: 1 });
  }

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Renderizar el carrito después de añadir un producto
  renderizarCarrito();
}

// Obtener productos del catálogo almacenado
const productosLocalStorage = JSON.parse(localStorage.getItem("catalogo"));

// Función para renderizar el botón de acción en el catálogo
function renderizarBotonAccion(index) {
  const producto = productosLocalStorage[index];

  if (producto) {
    return `<button onclick="añadirProducto(${index})" class="btn btn-primary bg-black">Agregar al carrito</button>`;
  }
}

// Función para renderizar el catálogo
function renderizarCatalogo() {
  divCatalogo.innerHTML = "";

  productosLocalStorage.forEach((producto, index) => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "card mb-3 col-sm-6";
    tarjeta.style = "width: 18rem;";

    const imagen = document.createElement("img");
    imagen.src = producto.imagen;
    imagen.className = "card-img-top";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const titulo = document.createElement("h5");
    titulo.className = "card-title";
    titulo.textContent = producto.titulo;

    const precio = document.createElement("p");
    precio.className = "card-text";
    precio.textContent = `$${producto.precio}`;

    const agregarBtn = document.createElement("div");
    agregarBtn.innerHTML = renderizarBotonAccion(index);

    cardBody.appendChild(imagen);
    cardBody.appendChild(titulo);
    cardBody.appendChild(precio);
    cardBody.appendChild(agregarBtn);

    tarjeta.appendChild(cardBody);
    divCatalogo.appendChild(tarjeta);
  });
}

// Agregar evento click al botón de ingreso
btnIngresar.addEventListener("click", function () {
  // Obtener valores de los campos de entrada
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;

  // Limpia los campos después de procesar los datos (opcional)
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
});

// Renderizar el catálogo inicialmente
renderizarCatalogo();

