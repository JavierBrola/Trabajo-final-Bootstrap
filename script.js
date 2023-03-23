// VARIABLES DEL CARRITO-------------------------------
let carrito = document.querySelector("#carrito");
let numcarr = document.querySelector("#numcarr");
let numero = (parseInt(numcarr.textContent));
let despliegue = document.querySelector(".contvisor");
let agregarproducto = document.querySelector(".agregarProducto");
let todosLosProductos = document.querySelectorAll(".respimg");
let productosAgregados = [];

// VARIABLES DEL FORMULARIO---------------------------------
let nombre = document.querySelector("#nomb");
let tel = document.querySelector("#tel");
let mail = document.querySelector("#mail");
let consulta = document.querySelector("consul");
let enviar = document.querySelector("#enviar");

//-------------------AGREGAR PRODUCTO AL CARRITO--------------------
carrito.addEventListener("click",()=>{
    despliegue.classList.toggle("ocultar");
});


for (let i = 0; i < todosLosProductos.length; i++) {

    todosLosProductos[i].addEventListener("click", (e)=>{
        if (e.target.classList.contains('agrcarr') == true) {
            numero= numero +1;
            numcarr.textContent= numero;
            numcarr.classList.remove("visually-hidden");
            let producto = e.target.parentElement;
            let informacion = {
                contador: 1,
                nombre: producto.querySelector("h4").textContent,
            }

            productosAgregados= [...productosAgregados, informacion]
        }
    })

    console.log(productosAgregados);
}





