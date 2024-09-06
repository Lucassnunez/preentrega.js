// Obtener referencia al elemento del DOM para el carrito
const divCarrito = document.getElementById("carrito");

// Obtener referencia al elemento del DOM para el botón "Confirmar compra"
const confirmarCompraContainer = document.getElementById("confirmarCompraContainer");

// Inicializar el carrito como un array vacío
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Función para confirmar la compra
function confirmarCompra() {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "No podrás revertir esto.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, confirmar compra"
  }).then((result) => {
    if (result.isConfirmed) {
      // Reiniciar el carrito a un array vacío
      carrito.length = 0;
      localStorage.setItem("carrito", JSON.stringify(carrito));

      renderizarCarrito(); // Renderizar el carrito para reflejar el cambio en la interfaz
      agregarBotonConfirmarCompra(); // Volver a agregar el botón después de vaciar el carrito

      Swal.fire({
        title: "¡Compra confirmada!",
        text: "Tu compra se ha realizado con éxito.",
        icon: "success"
      });
    }
  });
}

// Función para agregar el botón "Confirmar compra" si el carrito no está vacío
function agregarBotonConfirmarCompra() {
  // Verificar si el carrito no está vacío
  if (carrito.length > 0) {
    const botonConfirmarCompra = document.createElement("button");
    botonConfirmarCompra.textContent = "Confirmar compra";
    botonConfirmarCompra.className = "btn btn-success mt-3";
    botonConfirmarCompra.onclick = confirmarCompra;

    confirmarCompraContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar el botón
    confirmarCompraContainer.appendChild(botonConfirmarCompra);
  } else {
    // Si el carrito está vacío, eliminar el botón
    confirmarCompraContainer.innerHTML = "";
  }
}

// Función para restar un producto del carrito
function restarProducto(productId) {
  const productoEnCarrito = carrito.find((p) => p.id === productId);

  if (productoEnCarrito && productoEnCarrito.cantidad > 0) {
    productoEnCarrito.cantidad--;

    if (productoEnCarrito.cantidad === 0) {
      // Si la cantidad llega a cero, eliminar el producto del carrito
      eliminarProducto(productId);
    }
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
  agregarBotonConfirmarCompra(); // Agregar o quitar el botón después de restar un producto
}

// Función para renderizar el botón de acción en el carrito
function renderizarBotonAccion(index) {
  const producto = carrito[index];

  if (producto && producto.cantidad > 0) {
    return `
      <button onclick="restarProducto(${producto.id})" class="btn btn-warning">Quitar un producto</button>
      <p>Cantidad: ${producto.cantidad}</p>
    `;
  }
}

// Función para renderizar el carrito
function renderizarCarrito() {
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

// Función para eliminar un producto del carrito
function eliminarProducto(productId) {
  const productoIndex = carrito.findIndex((p) => p.id === productId);

  if (productoIndex !== -1) {
    carrito.splice(productoIndex, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));

    renderizarCarrito();
    agregarBotonConfirmarCompra(); // Agregar o quitar el botón después de eliminar un producto
  }
}

// Renderizar el carrito inicialmente
renderizarCarrito();
agregarBotonConfirmarCompra(); // Agregar el botón inicialmente