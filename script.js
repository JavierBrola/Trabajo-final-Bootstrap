let botones = document.querySelectorAll(".agrcarr");
let carrito = document.querySelector("#carrito");
let numcarr = document.querySelector("#numcarr")
let numero = (parseInt(numcarr.textContent));
let nombre = document.querySelector("#nomb");
let tel = document.querySelector("#tel");
let mail = document.querySelector("#mail");
let consulta = document.querySelector("consul");
let enviar = document.querySelector("#enviar");

for (const boton of botones) {
    boton.addEventListener("click", () =>{
        numero= numero +1;
        numcarr.textContent= numero;
        numcarr.classList.remove("visually-hidden");
    });
}

enviar.addEventListener("click", ()=>{
    let nomcli = nombre.value;
    let telcli = tel.value;
    let mailcli = cli.value;
    let concli = consulta.value;
})