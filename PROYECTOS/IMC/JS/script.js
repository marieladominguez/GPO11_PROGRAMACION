// ARMAR LA VALIDACION DEL JS PARA HACER EL CALCULO Y MOSTRAR POR PANTALLA

/*let nombre= document.getElementById(nombre)
alert("HOLA", nombre)
-------------------------------------------------------
let altura= document.getElementById(altura)
let peso= document.getElementById(peso)
let resultado
function calculo() {   
    resultado=peso/(altura*altura)
    alert("tu imc es", resultado)
}
calculo()*/

var peso = prompt("Ingresa tu peso en kilogramos:");
var altura = prompt("Ingresa tu altura en metros:");


var altura_cuadrado = altura * altura;


var imc = peso / altura_cuadrado;


imc = imc.toFixed(2);


alert("Tu índice de masa corporal es: " + imc);
