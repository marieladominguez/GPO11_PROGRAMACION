
function calcularIMC() {
	
	var peso = parseFloat(document.getElementById("peso").value);
	var altura = parseFloat(document.getElementById("altura").value);
	
	
	if (isNaN(peso) || isNaN(altura) || altura <= 0) {
		document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
		return;
	}
	
	
	altura = altura / 100;

	
	var imc = peso / (altura * altura);

	
	imc = Math.round(imc * 100) / 100;


	document.getElementById("resultado").textContent = "Tu IMC es: " + imc;
}


  
