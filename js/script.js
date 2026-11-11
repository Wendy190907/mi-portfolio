
// MENSAJE DE BIENVENIDA
console.log("¡Bienvenido a mi portfolio!");

// MODO OSCURO
const botonModo = document.createElement("button");

botonModo.textContent = "🌙 Modo oscuro";

botonModo.style.padding = "10px 15px";
botonModo.style.margin = "10px";
botonModo.style.border = "none";
botonModo.style.borderRadius = "8px";
botonModo.style.cursor = "pointer";

document.querySelector("header nav").appendChild(botonModo);

botonModo.addEventListener("click", function() {

    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "☀️ Modo claro";
    } else {
        botonModo.textContent = "🌙 Modo oscuro";
    }

});
