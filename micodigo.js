window.onload = function() {
	// variables
	var count=0;
	var status=0;
	var espera=0;
	var aux=0;
	
	// Primer evento
	TiempoLlgada=parseFloat(prompt("Tiempo de llegada"));
	$('#tiempollegada').text(TiempoLlgada);

	// Funcion Click en el boto
	$('#btn-continuar').on('click', function () {
		if (count==0){  // Decide si esta vacion o se atiende a alguien
			$(".var").text(TiempoLlgada);
			TiempoLlgada=parseFloat(prompt("Tiempo de llegada"));
			$('#tiempollegada').text(TiempoLlgada);
			TiempoEspera=parseFloat(prompt("Tiempo de espera"));
	        $('#tiempoespera').text(TiempoEspera);
	        count++;
	        $('#count').text(count);
	        $('#status').text('1')g;
		} else {       // en caso de estar ocupado ejecuta esto
			if(TiempoLlgada > TiempoEspera){
 				clock = TiempoEspera;
 				TiempoEspera=parseFloat(prompt("Tiempo de espera"));
	        	$('#tiempoespera').text(TiempoEspera);
	        	$('#delay').text(espera);
	        	$('#count').text(count);
	        	aux = (aux > 0) ? aux-1 : 0; // para que no exista negativos en cola
	        } else {
				clock=TiempoLlgada;
				TiempoLlgada=parseFloat(prompt("Tiempo de llegada"));
				$('#tiempollegada').text(TiempoLlgada);
				espera = espera + TiempoEspera - clock;
				aux++, count++;
			}
		$(".var").text(clock);
		$('#numCola').text(aux);
		}
	});
} 
