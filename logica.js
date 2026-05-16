let primerNumero = null;
let operacion = null;
let pantalla = "";

function presionarNumero(numero) {
    pantalla += numero;
    document.getElementById("pantalla").value = pantalla;
}
function presionarOperacion(op) {
    primerNumero = pantalla;
    operacion = op;
    pantalla = "";
    document.getElementById("pantalla").value = pantalla;
    console.log("Operación presionada: " + op);
    console.log("Primer número: " + primerNumero);
    console.log("pantalla: " + pantalla);
}
function calcularResultado() {
    let segundoNumero = Number(pantalla);
    let primero = Number(primerNumero);
    let resultado;

    if (operacion === "+"){
        resultado = String(primero + segundoNumero);
    }
    else if (operacion ==="-"){
        resultado = String(primero - segundoNumero);
    }
    else if (operacion ==="*"){
        resultado = String(primero * segundoNumero);
    }
    else if (operacion ==="/"){
        resultado = String(primero / segundoNumero);
    }
    pantalla=String(resultado);
    document.getElementById("pantalla").value = pantalla;
}
function borrarTodo(){
    pantalla="";
    primerNumero=null;
    operacion=null;
    document.getElementById("pantalla").value = "";
}
