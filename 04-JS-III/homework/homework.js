// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
   
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (i=0; i<array.length;i++){
    array[i]= array[i]+1; }
    return array;
  }

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
   array.unshift(elemento);
   return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var string = '';
  i = 0;
  longitud = obtenerLargoDelArray(palabras)
  do {
    if (i=0) string = string + palabras[i]
    else
    string = string + ''+ palabras[i];
      i++;
      
  } while (i < longitud);
  return string;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento)){
    return true;
  }else return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  numeros.forEach(numero => suma=suma+numero);
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var cantELement = obtenerLargoDelArray(resultadosTest);
  if (cantELement>0){
    return agregarNumeros(resultadosTest)/cantELement
  }else
    return 0;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
 var max=0;
  numeros.forEach(elemento=>{
    if (elemento> max){
      max=elemento}
  })
  return max
}
    


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  
  var producto = 1;
  if (arguments.length ==0) return 0
  if (arguments.length == 1) return arguments[0] 
  else {
    for (var i=0; i < arguments.length; i++)  {producto = producto * arguments[i]};
    return producto;
  }  
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cant = 0;
  arreglo.forEach (element=>{
    if (element > 18) {
      cant++;
     }
  }) 
   
   return cant;
  }
 


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  switch (numeroDeDia) {
    case 1:
      return 'Es fin de semana';
      break; 
    case 2:
        return 'Es dia Laboral';
        break;
    case 3:
        return 'Es dia Laboral';
        break;
    case 4:
        return 'Es dia Laboral';
        break;
    case 5:
        return 'Es dia Laboral';
        break;
    case 6:
        return 'Es dia Laboral';
        break;
    case 7:
        return 'Es fin de semana';
        break;
    default:
      return 'Eror de Carga'
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
 
  output = [],
  sNumber = n.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
  output.push(+sNumber.charAt(i));
} 
    if (output[0]==9) return true
    else return false;
   
  }


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
    var indicador=true;
    aux = arreglo[0];
    tamaño = obtenerLargoDelArray(arreglo)
    i=0;
    while (i<tamaño && arreglo[i]==aux)
    {i++}
    if (i==tamaño){
          return indicador;
    }else return indicador=false;
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoarray = [];
  var i=0;
  var longitud = obtenerLargoDelArray(array);
  while (i< longitud ) {
    if(array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre') {
        nuevoarray.push(array[i]);
  }
  i++;
}
  if (obtenerLargoDelArray(nuevoarray)==3)return nuevoarray
  else return "No se encontraron los meses pedidos";
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  nuevoArray=[];
  array.forEach (element=>{
    if (element > 100) {
      nuevoArray.push(element);
     }
})
return nuevoArray;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  nuevoArray=[];
  iterar = 0;
  bol = true;
  suma=numero;
  while (iterar<10){
    if (suma == iterar) {
      bol=false;
      break}
    else{
      numero = suma+2;
      suma = numero;
      nuevoArray.push(numero);
    }
    iterar++;
  }
  if (bol) return nuevoArray;
  else return "Se interrumpió la ejecución"    
}     


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  nuevoArray=[];
  interar = 0;
  suma=0;
  while (interar<10){
    interar++;
    if (interar == 5) continue;
    
      suma = numero;
      numero = suma+2;
      nuevoArray.push(numero);
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
