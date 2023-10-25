console.log("EJercicio 5 test");

const ejercicio5Data = [
  [10, 20, 10],
  [5, 10, 5],
  [50, 100, 50],
  [20, 100, 80],
  [145, 500, 355]
];

    ejercicio5Data.forEach(element => {  
  const cambioTest = cambio(element[0], element[1]);

  console.log(cambioTest === element[2] ? "🟢" : "❌", 
              cambioTest, " | ", 
              element[2] 
              );              
});