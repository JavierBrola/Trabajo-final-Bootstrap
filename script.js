// VARIABLES DEL CARRITO-------------------------------
let carrito = document.querySelector("#carrito");
let numcarr = document.querySelector("#numcarr");
let numero = (parseInt(numcarr.textContent));
let despliegue = document.querySelector(".contvisor");
let todosLosProductos = document.querySelectorAll(".respimg");
let visor = document.querySelector("#visor");
let productosAgregados = [];
let pago = document.querySelector("#pago");
//VARIABLE FORM
let enviar = document.querySelector("#enviar");

//----------------------------------------------------------
//CARRITO---------------------------------------------------
//--------------------------------------------------------

//OCULTAR CARRITO--------------------
carrito.addEventListener("click",()=>{
    despliegue.classList.toggle("ocultar");
});

//FUNCION PARA AGREGAR PRODUCTOS--------------------
for (let i = 0; i < todosLosProductos.length; i++) {
    todosLosProductos[i].addEventListener("click", (e)=>{
        if (e.target.classList.contains('agrcarr') == true){
            numero = numero +1;

            numcarr.textContent= numero;

            numcarr.classList.remove("visually-hidden");

            let producto = e.target.parentElement;

            let informacion = {
                contadorprod: 1,
                nombre: producto.querySelector("h4").innerText,
            };

            let verifica = productosAgregados.some(producto => producto.nombre == informacion.nombre)
             
            if (verifica==true) {
                let cuenta = productosAgregados.map(producto=>{
                    if (producto.nombre == informacion.nombre) {
                        producto.contadorprod++
                        return producto
                    } else {
                        return producto
                    }
                })
                productosAgregados=[...cuenta]
            } else {
                productosAgregados=[...productosAgregados,informacion]
            }

            visor.innerHTML= '';

            productosAgregados.forEach((informacion) =>{
               
                let cajaProd = document.createElement("div");

                cajaProd.classList.add("d-flex","justify-content-around","mt-2");

                cajaProd.innerHTML= `
                
                    <p class="cantidad fw-bold col-1 text-center my-auto">
                        ${informacion.contadorprod}
                    </p>
            
                    <p class="modcarr fw-bold col-8 my-auto">
                        ${informacion.nombre}
                    </p>
                                    
                    <button class="col-2 bg-danger fw-bold p-1 rounded text-center my-auto me-2 borrar">
                        <svg class"borrar" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </button>`;

                visor.appendChild(cajaProd);
                

                let remover = cajaProd.querySelectorAll(".borrar");

                for (let i = 0; i < remover.length; i++) {
                    remover[i].addEventListener("click", (e)=>{
                        e.parentElement.remove()
                    })
                }
                
               
            }) 
        }
    })
}
//INTENTO DE BORRAR PRODUCTO
visor.addEventListener("click", (e)=>{
   if (e.target.classList.contains('borrar')) {
        e.parentElement.remove();
    } 
})

pago.addEventListener("click", ()=>{
    alert ("Gracias por su compra")
})

//--------------------------------------------------------
//FORMULARIO--------------------------------------------
//--------------------------------------------------------

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(document.forms[0].elements[0].value);
    console.log(document.forms[0].elements[1].value);
    console.log(document.forms[0].elements[2].value);
    console.log(document.forms[0].elements[3].value);
    document.forms[0].reset();
    alert("En breve le enviaremos una rta a su celular y/o mail. Muchas gracias!!")
})
