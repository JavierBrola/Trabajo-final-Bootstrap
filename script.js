let botones = document.querySelectorAll(".agrcarr");
let carrito = document.querySelector("#carrito");
let numcarr = document.querySelector("#numcarr")
let numero = (parseInt(numcarr.textContent));
console.dir(numcarr)
for (const boton of botones) {
    boton.addEventListener("click", () =>{
        numero= numero +1;
        numcarr.textContent= numero;
    });


}