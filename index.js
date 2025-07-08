alert("Hola :D")

const empleadosAutorizados = ["Laura", "Carlos", "Ana", "Luis", "Silvia"];

//El usuario debe loguearse previo al ingreso a la pagina

let num = prompt ("Indique codigo de la Empresa")
let num2 = prompt ("Indique su numero de usuario")

if(num == 1 && num2 <= 5){
    console.log("Bienvenido! Elijamos tu almuerzo");
}if(num == 1 && num2 > 5){
    console.log("La empresa no registra este numero de usuario");
}else if(num != 1 && num2 <= 5)
    console.log("Usted no pertenece a esta empresa")


function estaAutorizado(nombre) {
  
  if (empleadosAutorizados.includes(nombre)) {
    return true;
  } else {
    return false;
  }
}

function verificarAcceso(nombre) {
  const autorizado = estaAutorizado(nombre); 

  if (autorizado) {
    console.log(`${nombre} tiene acceso permitido.`);
  } else {
    console.log(`${nombre} NO tiene acceso.`);
  }
}

verificarAcceso("Laura");
verificarAcceso("Sergio");

//El servicio incluye ocho menues rotativos durante los cinco dias habiles de la semana

for (let i = 1; i <= 8; i++) {
  console.log("Menu número: " + i);
}
/*let menu1 = ("Fideos bolognesa")
let menu2 = ("Milanesa de carne con pure")
let menu3 = ("Ensalada de hojas con pechuga grille")
let menu4 = ("Carne guisada")
let menu5 = ("Cuarto de pollo con papas dore")
let menu6 = ("Carre de cerdo con batatas al horno")
let menu7 = ("Suprema rellena con ensalada de zanahoria y huevo")
let menu8 = ("Estofado de ave")*/
