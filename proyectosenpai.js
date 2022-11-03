const ingresar = document.getElementById("boton");
const salir = document.querySelector("#cruz");
const modal = document.querySelector(".modal");

ingresar.addEventListener('click', (boton) => {
    modal.style.visibility = "visible"
});

salir.addEventListener('click', (cruz) => {
    document.getElementById("id-modal").style.visibility = "hidden";
});





