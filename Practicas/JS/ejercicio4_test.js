console.log("Ejercicio 4 test");

const ejercicio4Data = [
    [10,5,20,10,11.18]
  ];
  
  ejercicio4Data.forEach(element => {  
    const distanciaTest = distancia(element[0], element[1], element[2], element[3]);
    let redondeado = Math.trunc(distanciaTest*100)/100;
    console.log(redondeado === element[4] ? "🟢" : "❌", 
                redondeado, " | ", 
                element[4] 
                );              
  });