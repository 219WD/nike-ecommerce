//Creamos la clase constructor
class Producto {
    constructor(
        id,
        marca,
        modelo,
        categoria,
        talle,
        imagen,
        precio,
        cantidad
    ) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.categoria = categoria;
        this.talle = talle;
        this.imagen = imagen;
        this.precio = precio;
        this.cantidad = cantidad || 0;  // Inicializamos la cantidad a 0 si no se proporciona
    }
}

//Almacenamos en LocalStorage
const productos = JSON.parse(localStorage.getItem("productos")) || [];


//Creamos el arreglo con los objetos
const inicializacion = () => {
    const data = [{
        id: 1,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/498450-800-800?v=638151117878670000&width=800&height=800&aspect=true",
        precio: 83.999,
    },
    {
        id: 2,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532085-800-800?v=638161388297170000&width=800&height=800&aspect=true",
        precio: 74.999,
    },
    {
        id: 3,
        marca: "nike",
        modelo: "dunk",
        categoria: "high",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532014-800-800?v=638161387218070000&width=800&height=800&aspect=true",
        precio: 87.999,
    },
    {
        id: 4,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532071-800-800?v=638161388110970000&width=800&height=800&aspect=true",
        precio: 74.999,
    },
    {
        id: 5,
        marca: "nike",
        modelo: "dunk",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531049-800-800?v=638161373370830000&width=800&height=800&aspect=true",
        precio: 74.999,
    },
    {
        id: 6,
        marca: "nike",
        modelo: "dunk",
        categoria: "niño",
        talle: [3, 3.5, 4, 4.5, 5, 5.5, 6],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/628346-800-800?v=638210580627870000&width=800&height=800&aspect=true",
        precio: 44.999,
    },
    {
        id: 7,
        marca: "jordan",
        modelo: "retro 1",
        categoria: "high",
        talle: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/702731-800-800?v=638233931477530000&width=800&height=800&aspect=true",
        precio: 99.999,
    },
    {
        id: 8,
        marca: "jordan",
        modelo: "retro 1",
        categoria: "mid",
        talle: [8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531140-800-800?v=638161374684830000&width=800&height=800&aspect=true",
        precio: 103.999,
    },
    {
        id: 9,
        marca: "jordan",
        modelo: "retro 3",
        categoria: "mid",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/698254-800-800?v=638229571158970000&width=800&height=800&aspect=true",
        precio: 143.999,
    },
    {
        id: 10,
        marca: "jordan",
        modelo: "retro 5",
        categoria: "high",
        talle: [7, 7.5, 8, 8.5, 10, 10.5, 11.5, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/532359-800-800?v=638161392071800000&width=800&height=800&aspect=true",
        precio: 155.999,
    },
    {
        id: 11,
        marca: "jordan",
        modelo: "dubzero",
        categoria: "mid",
        talle: [6, 6.5, 7.5, 8.5, 9, 10, 10.5, 11.5, 13],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/528864-800-800?v=638161343074170000&width=800&height=800&aspect=true",
        precio: 115.999,
    },
    {
        id: 12,
        marca: "jordan",
        modelo: "legacy",
        categoria: "low",
        talle: [7, 8, 8.5, 9],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/378779-800-800?v=638138927048800000&width=800&height=800&aspect=true",
        precio: 103.999,
    },
    {
        id: 13,
        marca: "jordan",
        modelo: "retro 3",
        categoria: "high",
        talle: [7, 7.5, 9.5, 10, 10.5, 11, 11.5, 12, 13],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/157554-800-800?v=638086307297900000&width=800&height=800&aspect=true",
        precio: 143.999,
    },
    {
        id: 14,
        marca: "jordan",
        modelo: "retro 6",
        categoria: "high",
        talle: [5, 5.5, 6, 6.5, 7],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/158958-800-800?v=638086326697770000&width=800&height=800&aspect=true",
        precio: 143.999,
    },
    {
        id: 15,
        marca: "nike",
        modelo: "force",
        categoria: "niño",
        talle: [3, 4.5, 5, 5.5, 6, 6.5, 7],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/453918-800-800?v=638149301781930000&width=800&height=800&aspect=true",
        precio: 56.999,
    },
    {
        id: 16,
        marca: "nike",
        modelo: "force",
        categoria: "low",
        talle: [5.5, 6, 6.5, 8.5, 10.5, 11, 12],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/629256-800-800?v=638210595101330000&width=800&height=800&aspect=true",
        precio: 83.999,
    },
    {
        id: 17,
        marca: "nike",
        modelo: "force",
        categoria: "mid",
        talle: [8, 8.5, 10.5, 11, 11.5, 13],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/658672-800-800?v=638221810286670000&width=800&height=800&aspect=true",
        precio: 93.999,
    },
    {
        id: 18,
        marca: "nike",
        modelo: "force",
        categoria: "low",
        talle: [5, 5.5, 6, 6.5, 7, 7.5, 8],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/408190-800-800?v=638143141211500000&width=800&height=800&aspect=true",
        precio: 87.999,
    },
    {
        id: 19,
        marca: "nike",
        modelo: "force",
        categoria: "mid",
        talle: [7, 9, 10.5, 11],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/531800-800-800?v=638161384321300000&width=800&height=800&aspect=true",
        precio: 93.999,
    },
    {
        id: 20,
        marca: "nike",
        modelo: "force",
        categoria: "niño",
        talle: [5, 5.5],
        imagen: "https://nikearprod.vtexassets.com/arquivos/ids/439665-800-800?v=638145706057400000&width=800&height=800&aspect=true",
        precio: 43.999,
    },
    ];

    data.forEach((item) => {
        let prod = new Producto(
            item.id,
            item.marca,
            item.modelo,
            item.categoria,
            item.talle,
            item.imagen,
            item.precio,
            0  // Agregamos la cantidad inicial como 0
        );

        productos.push(prod);
    });
    localStorage.setItem("productos", JSON.stringify(productos));
};

//Capturamos el contenedor
const contenedor = document.querySelector(".contenedor");

//Listamos los productos 
const listarProductos = () => {
    contenedor.innerHTML = "";
    productos.forEach((item) => {
        let columna = document.createElement("div");
        columna.classList = "zapatillas";

        let tarjeta = `
            <div class="zapatillas">
                <div class="contenedor-img">
                    <img src="${item.imagen}" class="img-card" alt="${item.marca}">
                </div>
                <div class="info">
                    <h2>${item.marca} ${item.modelo}</h2> 
                    <p>Zapatillas ${item.categoria}</p>   
                    <h2>$${item.precio}</h2>
                    <button class="overlayOpen" data-id="${item.id}">VER PRODUCTO</button>
                </div>
            </div>
        `;

        columna.innerHTML = tarjeta;
        contenedor.appendChild(columna);
    });
};

if (productos.length === 0) {
    inicializacion();
}

listarProductos();

// Asignamos eventos al boton que desata el Overlay
function asignarEventosOverlayOpen() {
    document.querySelectorAll("button.overlayOpen").forEach((button) => {
        button.addEventListener("click", () => {
            const productoId = parseInt(button.dataset.id);
            const producto = productos.find((p) => p.id === productoId);

            const overlay = document.createElement("div");
            overlay.classList.add("producto");

            const talleButtons = producto.talle.map((talle) => `<button class="talle">${talle}</button>`).join('');

            overlay.innerHTML = `
                <div class="contenedor-img-producto">
                    <img src="${producto.imagen}" class="img-card" alt="${producto.marca}">
                </div>
                <div class="info-producto">
                    <h2 class="titulo-producto">${producto.marca} <span>${producto.modelo}</span></h2> 
                    <p class="categoria-producto">Zapatillas ${producto.categoria}</p>   
                    <div class="talles">
                        ${talleButtons}
                    </div>
                    <h2 class="precio-producto">$${producto.precio}</h2>
                    <button class="agregarCarrito">AGREGAR AL CARRITO</button>
                    <button class="overlayClose">[x]</button>
                </div>
            `;

            document.body.appendChild(overlay);

            const tl = new TimelineMax({ paused: true });
            tl.from(".producto", {
                y: "-100vh",
            });

            tl.reverse();

            document.addEventListener("click", function (event) {
                if (event.target.classList.contains("overlayOpen") || event.target.classList.contains("overlayClose")) {
                    tl.reversed(!tl.reversed());
                }
            });

            overlay.querySelector(".agregarCarrito").addEventListener("click", () => {
                producto.cantidad++;
                actualizarTotal();

                // Agregamos el producto al carrito
                const carrito = document.querySelector(".menu-cart .carrito");
                const productoEnCarrito = document.createElement("div");
                productoEnCarrito.classList.add("producto-en-carrito");
                productoEnCarrito.innerHTML = `
                    <img src="${producto.imagen}" class="img-cart" alt="${producto.marca}">
                    <p class="productoMm">${producto.marca} ${producto.modelo}</p><br>
                    <p class="precioCart">Precio: $${producto.precio}</p>
                `;
                carrito.appendChild(productoEnCarrito);
            });
        });
    });
}


asignarEventosOverlayOpen();

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search");

    searchIcon.addEventListener("click", function () {
        const menuSearch = document.querySelector(".menu-search");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("placeholder", "Buscar...");

        const button = document.createElement("button");
        button.textContent = "Buscar";
        button.classList = "button-search"

        button.addEventListener("click", function () {
            const searchTerm = input.value.toLowerCase();

            const resultadosMarca = productos.filter(producto => buscarPorMarca(producto, searchTerm));
            const resultadosTalle = productos.filter(producto => buscarPorTalle(producto, parseFloat(searchTerm)));
            const resultadosModelo = productos.filter(producto => buscarPorModelo(producto, searchTerm));

            const resultados = [...resultadosMarca, ...resultadosTalle, ...resultadosModelo];

            listarResultados(resultados);
        });

        menuSearch.innerHTML = "";
        menuSearch.appendChild(input);
        menuSearch.appendChild(button);
    });
});

function listarResultados(resultados) {
    contenedor.innerHTML = "";
    resultados.forEach((item) => {
        let columna = document.createElement("div");
        columna.classList = "zapatillas";

        let tarjeta = `
            <div class="zapatillas">
                <div class="contenedor-img">
                    <img src="${item.imagen}" class="img-card" alt="${item.marca}">
                </div>
                <div class="info">
                    <h2>${item.marca} ${item.modelo}</h2> 
                    <p>Zapatillas ${item.categoria}</p>   
                    <h2>$${item.precio}</h2>
                    <button class="overlayOpen" data-id="${item.id}">VER PRODUCTO</button>
                </div>
            </div>
        `;

        columna.innerHTML = tarjeta;
        contenedor.appendChild(columna);
    });
    asignarEventosOverlayOpen(); 
}

function buscarPorMarca(producto, marca) {
    return producto.marca.toLowerCase().includes(marca);
}

function buscarPorTalle(producto, talle) {
    return producto.talle.includes(talle);
}

function buscarPorModelo(producto, modelo) {
    return producto.modelo.toLowerCase().includes(modelo);
}

document.addEventListener("DOMContentLoaded", function () {
    const menuSearch = document.querySelector(".menu-search");
    const searchIcon = document.querySelector(".search");
    let isSearchOpen = false;

    const tlMenuSearch = new TimelineMax({ paused: true });
    tlMenuSearch.from(menuSearch, { y: "-100vh" });

    menuSearch.style.display = "none";

    searchIcon.addEventListener("click", function () {
        if (isSearchOpen) {
            tlMenuSearch.reverse();
            searchIcon.innerHTML = `<ion-icon name="search-sharp"></ion-icon>`;
        } else {
            tlMenuSearch.play();
            menuSearch.style.display = "flex";
            searchIcon.innerHTML = `<ion-icon name="close-sharp"></ion-icon>`;
        }
        isSearchOpen = !isSearchOpen;
    });

    let isCartOpen = false;
    const menuCart = document.querySelector(".menu-cart");
    const tlMenuCart = new TimelineMax({ paused: true });
    tlMenuCart.from(menuCart, { x: "100%" });
    
    function openCart() {
        menuCart.classList.add("visible");
        tlMenuCart.play();
        isCartOpen = true;
    }
    
    function closeCart() {
        tlMenuCart.reverse();
        isCartOpen = false;
    }
    
    const cartIcon = document.querySelector(".cart");
    cartIcon.addEventListener("click", function () {
        if (isCartOpen) {
            closeCart();
        } else {
            openCart();
        }
    });
    
    const closeCartBtn = document.querySelector(".close-cart");
    closeCartBtn.addEventListener("click", closeCart); 
});

// Agregamos una función para actualizar el total a pagar
function actualizarTotal() {
    const totalElement = document.querySelector(".total");
    console.log("Total Element:", totalElement);

    const total = productos.reduce((sum, producto) => {
        const precio = parseFloat(producto.precio);
        console.log("Precio:", precio);
        const cantidad = parseFloat(producto.cantidad);
        console.log("Cantidad:", cantidad);
        return sum + (precio * cantidad);
    }, 0);

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    console.log("Total:", total);
}
