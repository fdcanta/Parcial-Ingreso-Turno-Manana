/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  var marca;
  var precio;
  var peso;
  var tipo;
  var respuesta;
  var pesoTotal;
  var liquidoCaro;
  var precioCaro;
  var solidoLiviano;
  var banderaCaro;
  var banderaLiviano;
  var pesoLiviano;
  precio=0;
  pesoLiviano =0;
  precioCaro =0;
  banderaCaro =0;
  banderaLiviano=0;
  pesoTotal=0;
  confirmacion=0;
  respuesta = 'si';
  pesoTotal=parseInt(pesoTotal);

  while (respuesta!='no'){

    marca=prompt("Ingrese la marca del producto")

    precio=prompt("Ingrese el precio del producto")
    precio=parseInt(precio);
    while(isNaN(precio)){
      precio=prompt("Precio incorrecto, ingrese un precio expresado en numeros.")
      precio=parseInt(precio);
    }

    peso = prompt("Ingrese el peso en kilogramos del producto")
    peso=parseInt(peso)
    while(isNaN(peso)){
      peso=prompt("Peso incorrecto, ingrese un peso en kilogramos")
      peso=parseInt(peso)
    }

    tipo=prompt("ingrese el tipo de producto: l-liquido s-solido")
    while (tipo!='l'&&tipo!='s'){
      tipo=prompt("Tipo incorrecto, ingrese l-liquido s-solido")
    }

    if (banderaCaro==0&&tipo=='l'){
      liquidoCaro=marca;
      precioCaro=precio;
      banderaCaro=1;
    }
    if (banderaCaro!=0&&precio>precioCaro){
      liquidoCaro=marca;
      precioCaro=precio;
    }

    if (banderaLiviano==0&&tipo=='s'){
      solidoLiviano=marca;
      pesoLiviano=peso;
      banderaLiviano=1;
    } 
    if (tipo=='s'&&peso<pesoLiviano){
      solidoLiviano=marca;
      pesoLiviano=peso;
    }

    pesoTotal+=peso;



    

    respuesta = prompt("Desea ingresar otro producto?")
    while (respuesta!='no'&& respuesta!='si'){
      respuesta = prompt("Incorrecto, desea ingresar otro producto?")
    }
  }

  console.log("El peso total de la compra es "+pesoTotal)
  if (banderaCaro!=0){
    console.log("El liquido mas caro es "+liquidoCaro)
  }
  if (banderaLiviano!=0){
    console.log("El solido mas liviano es "+solidoLiviano)
  }
  
}
