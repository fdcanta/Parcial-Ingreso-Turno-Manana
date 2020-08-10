/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	var respuesta;
	var titular;
	var lugar;
	var temporada;
	var huespedes;
	var salta;
	var bariloche;
	var cataratas;
	var viajeInvierno;
	var personasInvierno;
	var masConcurrido;
	var masHuespedes;
	var huespedesNumero;
	var bandera;
	personasInvierno=0;
	bandera =0;
	viajeInvierno=0
	salta=0;
	cataratas=0;
	bariloche=0;
	personasInvierno=parseInt(personasInvierno)

	respuesta='si';

	while (respuesta=='si'){
		titular=prompt("Ingrese el nombre del titular")

		lugar=prompt("Ingrese destino: a-salta, b-bariloche, c-cataratas")
		while (lugar!='a'&&lugar!='b'&&lugar!='c'){
			lugar=prompt("Incorrecto, ingrese destino: a-salta, b-bariloche, c-cataratas")
		}

		temporada=prompt("Ingrese la temporada: a-otoño, b-invierno, c-verano, d-primavera")
		while (temporada!='a'&&temporada!='b'&&temporada!='c'&&temporada!='d'){
			temporada=prompt("Incorrecto, ingrese la temporada: a-otoño, b-invierno, c-verano, d-primavera")
		}

		huespedes=prompt("Ingrese la cantidad de huespedes")
		huespedes=parseInt(huespedes)
		while (isNaN(huespedes)||huespedes<0){
			huespedes=prompt("Incorrecto, ingrese el numero de huespedes.")
			huespedes= parseInt(huespedes)
		}

		if (bandera==0){
			masHuespedes=titular;
			huespedesNumero=huespedes;
			bandera++;
		}
		if (bandera!=0&&huespedes>huespedesNumero){
			masHuespedes=titular;
		}

		switch (lugar){
			case 'a':
				salta++;
				break;
			case 'b':
				bariloche++;
				break;
			case 'c':
				cataratas++;
		}

		if (temporada='b'){
			viajeInvierno++;
			personasInvierno +=(huespedes+1)
		}


		respuesta=prompt("Desea ingresar otro viaje? si/no")
		while (respuesta!='si'&&respuesta!='no'){
			respuesta=prompt("Incorrecto, desea ingresar otro viaje? si/no")
		}

	}
	if (bariloche>salta&&bariloche>cataratas){
		masConcurrido='bariloche.'
	}else if (salta>cataratas){
		masConcurrido='salta.'
	}else {
		masConcurrido='cataratas.'
	}

	console.log("El lugar mas concurrido es "+masConcurrido)
	console.log("El titular que mas personas llevo es "+masHuespedes)
	if (viajeInvierno!=0){
		personasInvierno/viajeInvierno;
		console.log("El promedio de personas que viaja en invierno es "+personasInvierno)
	}
}
