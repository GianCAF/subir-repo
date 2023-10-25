console.log("Ejercicio 2");
/* 

 */

function promedioStudent(M, califArray) {
    // se pone to string porque se quiere devolver una cadena no sumar valores para poder mostrar numeros y enseguida otros numeros 
    let suma = 0;
    for (var i=0; i< califArray.length; i++){
        suma += califArray[i];
    }
    p = suma/6;
 
    return M.toString() +  " " + p.toFixed(2).toString();
}