const empleadosAutorizados = ["Laura", "Carlos", "Ana", "Luis", "Silvia"];

// LOGIN
const loginForm = document.getElementById("login-form");
const empresaInput = document.getElementById("empresa-codigo");
const usuarioInput = document.getElementById("usuario-numero");
const loginMensaje = document.getElementById("login-mensaje");

const menuSection = document.getElementById("menu-section");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const empresa = parseInt(empresaInput.value);
    const usuario = parseInt(usuarioInput.value);

    if (empresa === 1 && usuario <= 5) {
        loginMensaje.textContent = "Bienvenido/a. Elijamos tu almuerzo.";
        loginForm.style.display = "none";
        menuSection.style.display = "block";
    } else if (empresa === 1 && usuario > 5) {
        loginMensaje.textContent = "La empresa no registra este número de usuario.";
    } else if (empresa !== 1 && usuario <= 5) {
        loginMensaje.textContent = "Usted no pertenece a esta empresa.";
    } else {
        loginMensaje.textContent = "Datos incorrectos.";
    }
});

// MENÚ
const menuForm = document.getElementById("menu-form");
const empleadoInput = document.getElementById("empleado-nombre");
const menuSelect = document.getElementById("menu-elegido");
const menuMensaje = document.getElementById("menu-mensaje");

menuForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = empleadoInput.value.trim();
    const menu = menuSelect.value;

    if (!empleadosAutorizados.includes(nombre)) {
        menuMensaje.textContent = `${nombre} NO está autorizado a elegir menú.`;
        return;
    }

    const eleccion = {
        nombre,
        menu,
        fecha: new Date().toLocaleDateString()
    };

    let elecciones = JSON.parse(localStorage.getItem("elecciones")) || [];
    elecciones.push(eleccion);
    localStorage.setItem("elecciones", JSON.stringify(elecciones));

    menuMensaje.textContent = `${nombre} eligió el menú: ${menu}. ¡Buen provecho!`;
    menuForm.reset();
});

