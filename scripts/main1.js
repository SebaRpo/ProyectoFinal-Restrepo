// Objetos que se van a agregar al carrito dentro de un arreglo
document.addEventListener("DOMContentLoaded", () => {
  fetchProductos()

}); 

let productos = [];
const fetchProductos = async () => {
  try {
    const response = await fetch('../json/productos.json');
    const data = await response.json();
    cargarProductos(data);
    productos = data;
  } catch (error) {
    console.log('Ha ocurrido un error:', error);
  }
};



  
const cproductos = document.querySelector (".cproductos");
const botonesAgregar = document.getElementsByClassName ("botonAgregar");
const precioTotal = document.querySelector ("#precioTotal");
let carrito = [];
//Carrito de compras lateral
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

 
 // Este codigo crea los productos en el html  
function cargarProductos(productos){
 
    productos.forEach((producto) => {
      const div = document.createElement ("div");
      div.classList.add("productos__producto");
      div.innerHTML += `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="productos__informacion">
            <span>${producto.nombre}</span>
            <span class="precio">Precio: ${producto.precio} $</span>
            <button onclick="agregarAlCarro(${producto.id})" class="botonAgregar btn btn-outline-secondary">Agregar al carro</button>
        </div>
      `;
      
      cproductos.append(div);
  });
};

const mostrarCarro = () => {   
  const modal = document.querySelector(".carrito");
    modal.innerHTML = "";
    carrito.forEach((item) => {
    const {id, nombre, imagen, categoria, precio, cantidad}= item;
    
    modal.innerHTML += `
        <div class="caja-carrito">
        <img src="${item.imagen}" alt="${item.nombre}" class="cart-img img-fluid">
        <div class="detalleCaja">
            <span class="carroTituloProducto">${item.nombre}</span>
            <span class="carroPrecio">${item.precio} $</span>
            <span class="cantidadCarrito">Cantidad: ${item.cantidad}</span>
            </div>
            <!-- Eliminar del carro -->
            <i onclick="eliminarDelCarro(${id})" class="fa-solid fa-trash cart-remove"></i>
        </div>
        </div>
    `;
  
  });

  //Contador de productos
  contadorCarrito = carrito.length;
  document.getElementById("contadorCarrito").innerHTML = contadorCarrito;
  //Elementos guardados en el carrito
  console.log(contadorCarrito);
  guardarCarrito();
  //Calculo del precio total 
  precioTotal.innerText  = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0) + " $";//'acc' es el acumulador y 'item' es cada elemento del array
  
};


document.addEventListener("DOMContentLoaded", () => {
  carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  mostrarCarro();
});

function agregarAlCarro(id) {
  const existe = carrito.some((item) => item.id === id);
  if (existe) {
    const items = carrito.map((item) => {
      if (item.id === id) {
        item.cantidad++;
      }
      return item;
    });
    carrito = [...items];
  
  }else { 
    const item = productos.find((item) => item.id === id);
    carrito.push({ ...item, cantidad: 1 });
  };
  
  mostrarCarro();
};




//Eliminar del carro

function eliminarDelCarro(id) {
  const productId = id;
  carrito = carrito.filter((product) => product.id !== productId);
  mostrarCarro();
  guardarCarrito();
};
//Almacenaje de los productos en el LocalStorage
function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
};



//Abrir carrito de compras
cartIcon.onclick = () => { 
  cart.classList.add("active");

};


//Cerrar carrito de compras
closeCart.onclick = () => { 
  cart.classList.remove("active");
};

guardarCarrito();
//window.location.href = "otro.html";


function procesarCompra() {

  const carritoGuardado = localStorage.getItem('carrito');
  const listacompra = document.querySelector(".listaCompra");

    if (carritoGuardado) {
      const carrito = JSON.parse(carritoGuardado);

      const listacompra = document.querySelector(".listaCompra");
      carrito.forEach((item) => {
        const { id, nombre, imagen, categoria, precio, cantidad } = item;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td><a href=""><i class="far fa-times-circle"></i></a></td>
          <td><img src="${imagen}" alt=""></td>
          <td>${nombre}</td>
          <td>${precio}</td>
          <td>${cantidad}</td>
          <td>${cantidad * precio} $</td>
        `;
        listacompra.appendChild(tr);
      });
    }
}
procesarCompra();

//Boton de compra
const comprar = document.querySelector("#comprar");

