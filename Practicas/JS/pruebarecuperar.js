console.log("truncar en una funcion de comparar js");
const distanciaData = [
    [10,4,20,8,13.42]
]

distanciaData.forEach(element => {  
    const DTest = distancia(element[0],element[1],element[2],element[3]);
    let cadena = DTest.toString();
                console.log(cadena);
                              
  });