/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	var contador;
	var nombre;
	var sexo;
	var edad;
	var mujeres;
	var hombres;
	var edadTotal;
	var bandera;
	var mujerTemperatura;
	var mayorTemperatura;
	mayorTemperatura=0;
	bandera =0;
	edadTotal=0;
	mujeres=0;
	hombres=0;
	contador=0;


	while (contador<5){
		nombre=prompt("Ingrese el nombre de la persona")

		temperatura = prompt("Ingrese la temperatura de la persona")
		while(isNaN(temperatura)||temperatura<24||temperatura>45){
			temperatura=prompt("Temperatura incorrecta, ingrese la temperatura de la persona")
		}

		sexo=prompt("Ingrese el sexo de la persona. f-femenino m-masculino")
		while(sexo!='f'&&sexo!='m'){
			sexo=prompt("Incorrecto, asigne f-femenino m-masculino")
		}
		if(sexo=='f'){
			mujeres++;
			if (bandera==0){
				mujerTemperatura=nombre;
				mayorTemperatura=temperatura;
				bandera=1;
			} else if (temperatura>mayorTemperatura){
				mujerTemperatura=nombre;
			}
		}else if(sexo=='m'){
			hombres++
		}

		edad=prompt("Ingrese edad, entre 0 años y 100 años")
		edad= parseInt(edad);
		while(isNaN(edad)||edad<0||edad>100){
			edad= prompt("Edad incorrecta, ingrese una edad entre 0 y 100 años")
			edad=parseInt(edad);
		}
		edadTotal+=edad;

		contador++;
	}

	console.log("El numero de mujeres es "+mujeres+" y el de hombres es "+hombres)
	if (edadTotal!=0){
		edadTotal=edadTotal/5;
		console.log("La edad promedio es "+edadTotal)
	} else {
		console.log("La edad promedio es 0")
	}
	if (mujeres!=0){
		console.log("La mujer de mayor temperatura es "+mujerTemperatura)
	} else {
		console.log("No hay mujeres en el hospital")
	}
}
