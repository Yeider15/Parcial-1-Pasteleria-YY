// Mostrar carrito y total
function mostrarCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const contenedorCarrito = document.getElementById('productos-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    
    // Mostrar los productos en el carrito
    contenedorCarrito.innerHTML = carrito.map(item => `
        <div class="item-carrito">
            <h5>${item.nombre} - ${item.precio} CLP x ${item.cantidad}</h5>
            <button onclick="eliminarProducto('${item.id_producto}')">Eliminar</button>
        </div>
    `).join('');

    // Mostrar el total del carrito
    totalCarrito.textContent = `$${carrito.reduce((total, item) => total + item.precio * item.cantidad, 0).toFixed(2)} CLP`;
}

// Eliminar producto del carrito
function eliminarProducto(idProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const carritoActualizado = carrito.filter(item => item.id_producto !== idProducto);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    mostrarCarrito();
}

// Cargar carrito al cargar la página
window.onload = mostrarCarrito;
