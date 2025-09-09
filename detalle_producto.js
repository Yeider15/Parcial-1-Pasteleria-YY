// Función para añadir o actualizar el producto en el carrito
function añadirAlCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const idProducto = 1;  // El ID debe ser dinámico
    const nombre = document.querySelector('.product-title').textContent;
    const precio = parseFloat(document.querySelector('.price').textContent.replace(/\D/g, ''));

    // Buscar si el producto ya está en el carrito
    const producto = carrito.find(item => item.id_producto === idProducto);
    producto ? producto.cantidad++ : carrito.push({ id_producto: idProducto, nombre, precio, cantidad: 1 });

    // Guardar el carrito actualizado
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarTotalCarrito();
}

// Función para eliminar un producto del carrito
function eliminarProducto(idProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = carrito.filter(item => item.id_producto !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    actualizarTotalCarrito();
}

// Función para actualizar el total del carrito
function actualizarTotalCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const total = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    console.log(`Total carrito: $${total.toFixed(2)} CLP`);
}

// Evento para añadir al carrito
document.querySelector('.add-to-cart-btn').addEventListener('click', añadirAlCarrito);

// Cargar el total al cargar la página
window.onload = actualizarTotalCarrito;
