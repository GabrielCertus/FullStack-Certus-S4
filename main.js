function capturar(){
	return document.getElementById("numero").value;
}

function calcularPares(){
	var num = capturar();
	var cadena = "";
	for(let i = 0; i <= num; i++){
		if(i % 2 == 0) cadena += i +", "
	}
    document.getElementById("par").innerHTML = cadena;
}