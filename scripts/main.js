/* 
for (let i = 0; i < vestidosDeBanio.length; i++) {
  opciones += `${vestidosDeBanio[i].id}. ${vestidosDeBanio[i].nombre}\n`;
}
let seleccion = prompt(`Seleccione un producto:\n${opciones}`);

// Buscamos el producto seleccionado

let producto = vestidosDeBanio.find(vestido => vestido.id == seleccion);

if (!producto) {
  alert("Producto no válido");
} else {
  // Pedimos al usuario la cantidad de productos a comprar
  let cantidad = prompt(`Ingrese la cantidad de "${producto.nombre}" a comprar:`);
  cantidad = parseInt(cantidad);

  // Validamos la cantidad
  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Cantidad no válida");
  } else {
    // Calculamos el total con descuento, IVA y envío gratis
    let total = producto.precio * cantidad;
    total = getTotalConDescuento(total, "sí");
    let iva = getValorIVA(total);
    let envio = getEnvioGratis(cantidad);
    total += iva + envio;

    // Mostramos el resultado en un alert
    alert(`Compra realizada exitosamente:\n${producto.nombre} x ${cantidad}\nTotal a pagar: $${total}. El IVA es: ${iva}`);
  }
}
 */

let userInputNumber = 0;


           

cargarProductos();

/* botonAgregar.forEach(boton => {
  boton.addEventListener("click", (agregarCarrito));
});


const productosCarrito = [];
function agregarCarrito(e){

  const idBoton = parseInt(e.currentTarget.id);
  const productoAgregado = vproductos.find((producto) => producto.id === idBoton);


  productosCarrito.push(productoAgregado);
  
};

 */

  



/* const select = document.getElementById(`selectTalla${idBoton}`);
const tallaSeleccionada = select.value;
productoAgregado.talla = tallaSeleccionada; */

// Objetos que se van a agregar al carrito dentro de un arreglo
/* const productos = [
    //Vestidos de banio
    {
      id: 1,
      nombre: "VestidodebañoBodiesolyluna",
      imagen:"img/vestido1.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 2,
      nombre: "VestidodebañoBodiePalmas",
      imagen:"img/vestido2.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 3,
      nombre: "VestidodebañoBodieJúpiter",
      imagen:"img/vestido3.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 4,
      nombre: "VestidodebañoBodieRojoFuego",
      imagen:"img/vestido4.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 5,
      nombre:"vestidodebañoBikiniGalaxia",
      imagen:"img/vestido5.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    },
    {
      id: 6,
      nombre: "VestidodebañoBikiniReversible",
      imagen:"img/vestido6.png",
      categoria: "vestido_de_banio",
      precio: 35000,
      cantidad: 0
    }
  
]; */