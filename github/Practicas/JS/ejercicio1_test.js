console.log("EJercicio 1 test");

const ejercicio1Data = [
  [5, 7, 48],
  [6, 9, 75],
  [8, 4, 48],
  [9, 3, 48],
  [7, -4, 3]
];

ejercicio1Data.forEach(element => {  
  const rTest = opAritmetica(element[0], element[1]);

  console.log(rTest === element[2] ? "🟢" : "❌", 
              rTest, " | ", 
              element[2] 
              );              
});