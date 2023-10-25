console.log("Ejercicio 6 test");

const ejercicio6Data = [
    [2, 4, 4],
    [, 200, 80],
    [5.50, 10.00, 4.50],
    [1500, 2000, 5000],
    [12345, 13000, 655]
  ];
  
  ejercicio6Data.forEach(element => {  
    const areaTest = trianguloArea(element[0], element[1]);
  
    console.log(areaTest === element[2] ? "🟢" : "❌", 
                areaTest, " | ", 
                element[2] 
                );              
  });