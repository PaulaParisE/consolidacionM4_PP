// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
    }
}

// Función para agregar productos al carrito
Carrito.prototype.agregarProducto = function(producto, cantidad) {
    this.productos.push({ producto: producto, cantidad: cantidad });
};

// Función para calcular el total de la compra 
Carrito.prototype.calcularTotal = function() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
        total += this.productos[i].producto.precio * this.productos[i].cantidad;
    }
    return total;
};

// Función para finalizar compra 
Carrito.prototype.finalizarCompra = function() {
    let total = this.calcularTotal();
    alert("El total de su compra es: $" + total);
    alert("Gracias por su compra.");
    this.productos = []; // Vaciar el carrito
};

// Función para mostrar los detalles de la compra 
Carrito.prototype.mostrarDetalles = function() {
    let detalles = "";
    for (let i = 0; i < this.productos.length; i++) {
        detalles += this.productos[i].cantidad + " x " + this.productos[i].producto.nombre
            + " - $" + this.productos[i].producto.precio + " c/u\n";
    }
    alert("Detalles de la compra:\n" + detalles);
};

// Productos para seleccionar y hacer el carrito
let carrito = new Carrito();
let productosDisponibles = [
    new Producto("Leche", 1000),
    new Producto("Pan de molde", 2000),
    new Producto("Queso", 1500),
    new Producto("Mermelada", 890),
    new Producto("Azúcar", 1300),
];

let continuar = true;

while (continuar) {
    // Mostrar productos disponibles
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productosDisponibles.length; i++) {
        mensaje += (i + 1) + ". " + productosDisponibles[i].nombre + " - $" + productosDisponibles[i].precio + "\n";
    }

    // Solicitar selección de producto 
    let seleccion = parseInt(prompt(mensaje + "Ingresa el número del producto que deseas agregar:")) - 1;

    // Validar selección
    if (seleccion >= 0 && seleccion < productosDisponibles.length) {
        let cantidad = parseInt(prompt("Ingresa la cantidad de " + 
            productosDisponibles[seleccion].nombre + " que deseas comprar:"));
        if (cantidad > 0) {
            carrito.agregarProducto(productosDisponibles[seleccion], cantidad);
            alert("Has agregado " + cantidad + " " + productosDisponibles[seleccion].nombre + " al carrito.");
        } else {
            alert("Cantidad no válida. Inténtalo de nuevo.");
        }
    } else {
        alert("Selección no válida. Inténtalo de nuevo.");
    }

    // Preguntar si desea seguir agregando productos 
    continuar = prompt("¿Deseas seguir agregando productos al carrito? (si/no)").toLowerCase() === "sí";
}


// Mostrar detalles de la compra 
carrito.mostrarDetalles();

// Finalizar compra
carrito.finalizarCompra();

